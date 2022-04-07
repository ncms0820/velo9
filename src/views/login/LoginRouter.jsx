import react, {useState} from "react";
import styles from "./Login.module.scss";

// page
import ChangePw from "./ChangePw";
import FindId from "./FindId";
import Login from "./Login";
import Signup from "./Signup";

// Components
import Button from "../../components/Button";

const LoginRouter = () => {

  const [page, setPage] = useState('login')

  const setTitle = () => {
    switch (page) {
      case 'login':
        return "로그인"
      case 'findId':
        return "아이디 찾기"
      case 'changePw':
        return "비밀번호 변경하기"
      case 'signup':
        return "회원가입"

      default:
        
    }
  }

  return(
    <>
      <div className={styles.loginHeaderBox}>
        <span>Logo</span>
        <span>{setTitle()}</span>
        <Button
          className={styles.dayAndNight}
          txt={"야간모드버튼"}
        />
      </div>

        {page === 'login' && <Login />}
        {page === 'findId' && <FindId />}
        {page === 'changePw' && <ChangePw />}
        {page === 'signup' && <Signup />}

      <span>라우팅 테스트 버튼입니다</span>
      <button onClick={() => setPage('login')}>로그인</button>
      <button onClick={() => setPage('findId')}>아이디찾기</button>
      <button onClick={() => setPage('changePw')}>비밀번호변경</button>
      <button onClick={() => setPage('signup')}>회원가입</button>
    
    </>
  )
}

export default LoginRouter;