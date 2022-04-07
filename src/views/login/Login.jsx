import react, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {

  const onChangeTest = (e, param) => {
    console.log("파라메터 없음")
  }
  
  const onChangeTestParams = (e, param) => {
    console.log(param)
    console.log(...param, "이게 파라메터들임")
  }


  return(
    <>

      <div className={styles.loginBox}>
        <div className={styles.idPwBox}>
          <Input 
            type="text"
            className={styles.idInput}
            onChange={onChangeTest}
          />
          <Input 
            type="password"
            className={styles.pwInput}
            onChange={onChangeTestParams}
            eventParam={["t1"]}
          />
          <Button
            txt="로그인"
            className={styles.loginBtn}
          />
        </div>

        <div className={styles.joinFindBox}>
          <Button
            txt="회원가입"
            className={styles.joinBtn}
          />
          <Button
            txt="아이디/비밀번호 찾기"
            className={styles.findUserBtn}
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
    </>
  )
} 

export default Login;