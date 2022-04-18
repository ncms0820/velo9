import { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";

import VerifyEmail from "./pageCompnents/VerifyEmail";
import DoubleCheckPw from "./pageCompnents/DoubleCheckPw";
import CheckId from "./pageCompnents/CheckId";
import CheckNickName from "./pageCompnents/CheckNickName";

const Signup = ({ page, setPage, authService, setLoginInfo }) => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState(""); // 아이디 입력\
  const [newPw, setNewPw] = useState(""); // 비밀번호
  const [nickName, setNickName] = useState(""); // 닉네임

  const [isCheckedId, setIsCheckedId] = useState(null); // null || boolean, 아이디 중복확인여부
  const [isVerified, setIsVerified] = useState(null); // null || boolean, 인증번호 확인여부
  const [isCheckedPw, setIsCheckedPw] = useState(null); // null || boolean, 비밀번호 체크여부
  const [isCheckedNickName, setIsCheckedNickName] = useState(null); // null || boolean, 비밀번호 체크여부

  const finishSignup = async () => {
    if (!isCheckedId) {
      alert("아이디 중복체크가 필요합니다.");
      return;
    }
    // if (!isVerified) {
    //   alert("이메일 인증이 필요합니다.");
    //   return;
    // }
    if (!isCheckedPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!isCheckedNickName) {
      alert("닉네임 확인이 필요합니다. 일치하지 않습니다.");
      return;
    }
    // 가입 및 로그인
    await authService.signup(id, newPw, nickName, email).then(() => {
      authService
        .login(id, newPw)
        .then((result) => {
          setLoginInfo(result);
        })
        .catch((e) => alert("아이디, 비밀번호를 확인해주세요."));
    });
  };

  return (
    <>
      {/* 이메일 확인 */}
      <VerifyEmail
        email={email}
        setEmail={setEmail}
        setIsVerified={setIsVerified}
        isVerified={isVerified}
        authService={authService}
        page={page}
      />

      {/* 아이디 중복체크 */}
      <CheckId
        id={id}
        setId={setId}
        isCheckedId={isCheckedId}
        setIsCheckedId={setIsCheckedId}
        authService={authService}
      />

      {/* 닉네임 중복체크 */}
      <CheckNickName
        nickName={nickName}
        setNickName={setNickName}
        isCheckedNickName={isCheckedNickName}
        setIsCheckedNickName={setIsCheckedNickName}
        authService={authService}
      />

      {/* 비밀번호체크, async X */}
      <DoubleCheckPw newPw={newPw} setNewPw={setNewPw} isCheckedPw={isCheckedPw} setIsCheckedPw={setIsCheckedPw} />

      <div className={styles.twoBtnBox}>
        <Button txt="돌아가기" onClick={() => setPage("login")} />
        <Button txt="가입하기" onClick={finishSignup} />
      </div>
    </>
  );
};

export default Signup;
