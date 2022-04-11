import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

// page
import ChangePw from "./ChangePw";
import FindId from "./FindId";
import Login from "./Login";
import Signup from "./Signup";

// Components
import Button from "../../components/Button";

const LoginRouter = ({ authService, setUserId }) => {
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
    <>
      <div className={styles.loginHeaderBox}>
        <Button txt="Velo9" onClick={() => navigate("/")} />
        <span>{setTitle()}</span>
        <Button className={styles.dayAndNight} txt="야간모드" />
      </div>

      <div className={styles.loginContentBox}>
        {page === "login" && <Login page={page} setPage={setPage} authService={authService} setUserId={setUserId} />}
        {page === "findId" && <FindId page={page} setPage={setPage} />}
        {page === "changePw" && <ChangePw page={page} setPage={setPage} />}
        {page === "signup" && <Signup page={page} setPage={setPage} />}
      </div>
    </>
  );
};

export default LoginRouter;
