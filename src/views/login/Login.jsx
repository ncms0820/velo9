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
      <div className={styles.loginHeader}>
        <span>Logo</span>
        <h1>로그인</h1>
        <Button
          txt={"야간모드버튼"}
        />
      </div>

      <div className="loginMain">
        {/*  type, className, onChange, eventParam  */}
        <Input 
          type="text"
          className={styles.idInputEle}
          onChange={onChangeTest}
        />
          <Input 
          type="password"
          className="pwInputEle"
          onChange={onChangeTestParams}
          eventParam={["t1"]}
        />
        <Button
          txt="로그인"
          className="loginBtn"
        />

        <div>
          <Button
            txt="회원가입"
            className="joinBtn"
          />
          <Button
            txt="아이디/비밀번호 찾기"
            className="joinBtn"
          />
        </div>

        <div className="socialLoginBox">
          <button className="githubLoginBtn"></button>
          <button className="googleLoginBtn"></button>
        </div>
      </div>
    </>
  )
} 

export default Login;