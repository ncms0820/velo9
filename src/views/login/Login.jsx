import react, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

const Login = ( {page, setPage} ) => {

  const onChangeTest = (e) => {
    console.log("파라메터 없음")
  }
  

  return(
      <div className={styles.columnBox}>
        

          <Txt txt="아이디" />
          <Input 
            type="text"
            className={styles.idInput}
            onChange={onChangeTest}
          />
          <Txt txt="비밀번호" />
          <Input 
            type="password"
            className={styles.pwInput}
            onChange={(e) => onChangeTest(e)}
          />
          <Button
            txt="로그인"
            className={styles.loginBtn}
          />

        <div className={styles.twoBtnBox}>
          <Button
            txt="회원가입"
            className={styles.joinBtn}
            onClick={() => setPage("signup")}
          />
          <Button
            txt="아이디/비밀번호 찾기"
            className={styles.findUserBtn}
            onClick={() => setPage("findId")}
          />
        </div>

        <div className={styles.socialLoginBox}>
          <Button
            txt="깃허브로 로그인(아마 아이콘)"
            className="githubLoginBtn"
          />
          <Button
            txt="구글로 로그인(아마 아이콘)"
            className="googleLoginBtn"
          />
        </div>

      </div>
  )
} 

export default Login;