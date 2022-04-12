import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

// Components

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

// page
import ChangePw from "./ChangePw";
import FindId from "./FindId";
import Login from "./Login";
import Signup from "./Signup";
import Txt from "../../components/Txt";

const LoginRouter = ({ authService, setUserId, setOnLoginModal }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState("login");

  const setTitle = () => {
    switch (page) {
      case "login":
        return "로그인";
      case "findId":
        return "아이디 찾기";
      case "changePw":
        return "비밀번호 변경하기";
      case "signup":
        return "회원가입";
      default:
    }
  };

  return (
    <div className={styles.loginOuter}>
      <div className={styles.loginContentBox}>
        <Txt txt={setTitle()} className={styles.loginTitle} />
        <FontAwesomeIcon icon={faX} className={styles.xBtn} onClick={() => setOnLoginModal(false)} />

        {page === "login" && <Login page={page} setPage={setPage} authService={authService} setUserId={setUserId} />}
        {page === "findId" && <FindId page={page} setPage={setPage} />}
        {page === "changePw" && <ChangePw page={page} setPage={setPage} />}
        {page === "signup" && <Signup page={page} setPage={setPage} />}
      </div>
    </div>
  );
};

export default LoginRouter;
