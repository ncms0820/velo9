import { useState } from "react";
import styles from "./Login.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

const Login = ({ setPage, authService, setLoginInfo }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 일반 로그인
  const goLogin = async () => {
    const result = await authService.login(id, pw).catch(() => alert("아이디, 비밀번호를 확인해주세요."));
    setLoginInfo(result);
  };

  // 소셜 로그인
  const goSocialLogin = async (event) => {
    const { id } = event.currentTarget;
    console.log(id);
    if (id === "githubLogin") {
      window.location.href =
        "http://localhost:8080/oauth2/authorization/github?redirect_uri=http://localhost:3000/oauth2/redirect";
    } else if (id === "googleLogin") {
      window.location.href =
        "http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth2/redirect";
    }
  };

  return (
    <>
      <Txt txt="아이디" />
      <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <Txt txt="비밀번호" />
      <Input type="password" value={pw} onChange={(e) => setPw(e.target.value)} onEnter={goLogin} />
      <Button txt="로그인" onClick={goLogin} />

      <div className={styles.twoBtnBox}>
        <Button txt="회원가입" className={styles.joinBtn} onClick={() => setPage("signup")} />
        <Button txt="아이디/비밀번호 찾기" className={styles.findUserBtn} onClick={() => setPage("findId")} />
      </div>

      <div className={styles.socialLoginBox}>
        <FontAwesomeIcon icon={faGithub} id="githubLogin" className={styles.icons} onClick={goSocialLogin} />
        <FontAwesomeIcon icon={faGoogle} id="googleLogin" className={styles.icons} onClick={goSocialLogin} />
      </div>
      {/* <Test /> */}
    </>
  );
};

export default Login;
