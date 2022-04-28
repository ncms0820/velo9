import React, { useEffect, useRef, useState } from "react";
import styles from "./_setting.module.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { unstable_batchedUpdates } from "react-dom";

const Setting = ({ dbService, authService, setLoginInfo }) => {
  const navigate = useNavigate();
  const nicknameRef = useRef();
  const introduceRef = useRef();
  const blogRef = useRef();
  const passwordRef = useRef();
  const socialRef = useRef();
  const socialGithubRef = useRef();
  const verifyNicknameRef = useRef();
  const resetNicknameRef = useRef();
  const [modify, setModify] = useState();
  const [verified, setVerified] = useState(false);
  const [preview, setPreview] = useState("");

  //초기값
  const [data, setData] = useState({
    nickname: "",
    introduce: "",
    blogTitle: "",
    socialEmail: "",
    socialGithub: "",
    thumbnail: "",
  });

  const handleSaveButton = async () => {
    setModify(true);
    if (modify) {
      if (verified === true) {
        const nickname = nicknameRef.current.value;
        const introduce = introduceRef.current.value;
        const blogTitle = blogRef.current.value;
        const socialEmail = socialRef.current.value;
        const socialGithub = socialGithubRef.current.value;

        await authService.postSetting(nickname, introduce, blogTitle, socialEmail, socialGithub);
        setVerified(false);
        setModify(false);
      } else {
        alert("닉네임 인증을 해주세요");
      }
    }
  };

  // 닉네임 인증 로직
  const nicknameVerifier = async () => {
    const nickname = nicknameRef.current;
    const verifyNick = verifyNicknameRef.current;
    const resetNick = resetNicknameRef.current;
    const result = await authService.validateNickname(nickname.value);
    if (result === true) {
      setVerified(true);
      alert("사용가능한 닉네임입니다.");
      nickname.setAttribute("disabled", true);
      verifyNick.style.display = "none";
      resetNick.style.display = "";
    } else {
      alert("유효하지 않는 닉네임입니다.");
    }
  };
  const nickPull = async () => {
    const nickname = nicknameRef.current;
    const verifyNick = verifyNicknameRef.current;
    const resetNick = resetNicknameRef.current;
    setVerified(false);
    nickname.removeAttribute("disabled");
    verifyNick.style.display = "";
    resetNick.style.display = "none";
  };

  //회원 비밀번호 변경
  const changePassword = async () => {
    const { value: password } = await Swal.fire({
      title: "기존 비밀번호를 입력해주세요",
      input: "password",
      inputLabel: "Old Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });
    const { value: password2 } = await Swal.fire({
      title: "변경할 비밀번호를 입력해주세요",
      input: "password",
      inputLabel: "New Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });
    if (password && password2) {
      const result = await authService.changePasswordInSetting(password, password2);
      if (result) {
        Swal.fire("비밀번호 변경 성공");
      } else {
        Swal.fire("비밀번호 변경 실패");
      }
    }
  };

  //회원 탈퇴
  const unregister = async () => {
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off",
      },
    });

    if (password) {
      const result = await authService.withdraw(password);
      if (result === true) {
        await setLoginInfo();
        navigate("/");
        Swal.fire("회원탈퇴 성공");
      } else {
        Swal.fire("회원탈퇴 실패");
      }
    }
  };

  //upload
  const uploadFile = async (event) => {
    const formData = new FormData();
    const inputFile = event.target.files[0];
    formData.append("uploadFile", inputFile);
    const file = await dbService.uploadMemberThumbnail(formData);
    unstable_batchedUpdates(() => {
      setData((prev) => {
        return { ...prev, thumbnail: file.fileName };
      });
      console.log(file.thumbnail);
      setPreview(file.thumbnail);
    });
  };
  //delete
  const deleteFile = async () => {
    const file = encodeURIComponent(data.thumbnail);
    console.log(file);
    await dbService.deleteMemberThumbnail(file);
    setPreview(null);
    setData((prev) => {
      return { ...prev, thumbnail: "" };
    });
    console.log("이미지 delete에 이상있습니다 위에처럼 넣어서 보내주는게 맞나요?");
  };

  // 수정시 input 활성화
  useEffect(() => {
    const nickname = nicknameRef.current;
    const introduce = introduceRef.current;
    const blog = blogRef.current;
    const password = passwordRef.current;
    const social = socialRef.current;
    const socialGithub = socialGithubRef.current;
    const verifyNickname = verifyNicknameRef.current;
    if (modify) {
      nickname.removeAttribute("disabled");
      introduce.removeAttribute("disabled");
      blog.removeAttribute("disabled");
      password.setAttribute("type", "button");
      password.addEventListener("click", changePassword);
      password.removeAttribute("disabled");
      social.removeAttribute("disabled");
      socialGithub.removeAttribute("disabled");
      verifyNickname.style.display = "";
    } else {
      nickname.setAttribute("disabled", true);
      introduce.setAttribute("disabled", true);
      blog.setAttribute("disabled", true);
      password.setAttribute("disabled", true);
      password.setAttribute("type", "password");
      social.setAttribute("disabled", true);
      socialGithub.setAttribute("disabled", true);
      verifyNickname.style.display = "none";
    }
  }, [modify]);

  // 최초 불러오기
  useEffect(() => {
    const promise = new Promise((resolve) => {
      const initialData = authService.getSetting();
      resolve(initialData);
    });
    promise.then((initialData) => {
      setData((prev) => {
        console.log(initialData);
        if (initialData.thumbnail) {
          const thumb = dbService.encoderThumbnailMember(initialData.thumbnail.fileName);
          setPreview(thumb);
        }
        return {
          ...prev,
          nickname: initialData.nickname,
          introduce: initialData.introduce,
          blogTitle: initialData.blogTitle,
          socialEmail: initialData.socialEmail,
          socialGithub: initialData.socialGithub,
          thumbnail: initialData.thumbnail && initialData.thumbnail.fileName,
        };
      });
    });
  }, [dbService]);
  return (
    <div className={styles.setting}>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.profile_field}>
            <div className={styles.img}>{preview !== null && <img src={preview} alt="pic" />}</div>
            <input type="file" className={styles.upload} onChange={uploadFile} />
            <div className={styles.remove} onClick={deleteFile}>
              이미지 제거
            </div>
          </div>
          <div className={styles.nickname_field}>
            <input ref={nicknameRef} className={styles.nickname} type="text" defaultValue={data.nickname} disabled />
            <button
              ref={verifyNicknameRef}
              onClick={nicknameVerifier}
              style={{ width: "30%", marginLeft: "70%", display: "none" }}
            >
              닉네임 인증
            </button>
            <button
              ref={resetNicknameRef}
              onClick={nickPull}
              style={{ width: "30%", marginLeft: "70%", display: "none" }}
            >
              재변경
            </button>
            <textarea
              ref={introduceRef}
              className={styles.introduce}
              type="text"
              defaultValue={data.introduce}
              disabled
            />
          </div>
        </div>
        <div className={styles.middle}>
          <div>
            <label htmlFor="blog">블로그 제목</label>
            <input ref={blogRef} id="blog" type="text" defaultValue={data.blogTitle} disabled />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input ref={passwordRef} id="password" type="password" value={"비밀번호 변경하기"} disabled />
          </div>
          <div className={styles.social}>
            <label htmlFor="social">소셜 정보</label>
            <div className={styles.email_field}>
              <input
                ref={socialRef}
                id="social"
                type="email"
                defaultValue={data.socialEmail}
                placeholder={"email을 입력해주세요"}
                disabled
              />
              <input
                ref={socialGithubRef}
                id="socialGithub"
                type="email"
                defaultValue={data.socialGithub}
                placeholder={"github 이메일을 입력해주세요"}
                disabled
              />
            </div>
          </div>
          <div className={styles.withdraw}>
            <label htmlFor="withdraw">회원 탈퇴</label>
            <div>
              <input id="withdraw" onClick={unregister} className={styles.withdraw} type="button" value={"회원 탈퇴"} />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div onClick={handleSaveButton}>수정하기 / 저장하기</div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
