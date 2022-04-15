import { useState, useEffect } from "react";
import styles from "./Login.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ page, setPage, authService, setUserId, setOnLoginModal }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 일반 로그인
  const goLogin = async () => {
    const url = "주소 넣어주세용"
    const body = {
      id: id,
      pw: pw
    }
    const res = await axios.post(url, body)
    try {
      if (res.data) { // 로그인 멤버가 있으면
        // 유저정보 넘겨주면 됩니다.
      } else {
        alert("가입된 정보가 없습니다.")
        return
      }
    } catch (e) {
      console.error(e)
      alert("알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요")
      return
    }
    
  };

  // 로그인 후 관리 홈페이지 이동
  const goToHome = (userId) => {
    setUserId(userId);
    navigate("/");
  };

  // 소셜 로그인
  const goSocialLogin = async (event) => {
    const { id } = event.target;
    if (id === "githubLogin") {
      authService.login("Github").then((data) => goToHome(data.user.uid));
    } else if (id === "googleLogin") {
      authService.login("Google").then((data) => goToHome(data.user.uid));
    }
  };

  useEffect(() => {
    let value = true;
    if (value) {
      authService.onAuthChange((user) => {
        user && goToHome(user.uid);
      });
    }
    return () => (value = false);
  });

  return (
    <>
      <Txt txt="아이디" />
      <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <Txt txt="비밀번호" />
      <Input type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
      <Button txt="로그인" onClick={() => goLogin()} />

      <div className={styles.twoBtnBox}>
        <Button txt="회원가입" className={styles.joinBtn} onClick={() => setPage("signup")} />
        <Button txt="아이디/비밀번호 찾기" className={styles.findUserBtn} onClick={() => setPage("findId")} />
      </div>

      <div className={styles.socialLoginBox}>
        <FontAwesomeIcon icon={faGithub} id="githubLogin" className={styles.icons} onClick={goSocialLogin} />
        {/* <FontAwesomeIcon icon={faGoogle} id="googleLogin" className={styles.icons} onClick={goSocialLogin} /> */}
        <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth2/redirect">
          google
        </a>
      </div>
      {/* <Test /> */}
    </>
  );
};

export default Login;
