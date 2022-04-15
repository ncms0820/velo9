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
  const goLogin = () => {
    console.log("로그인 ");
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
