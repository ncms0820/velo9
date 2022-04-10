import react, { useState, useEffect } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

const Login = ( {page, setPage} ) => {

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  // 일반 로그인
  const goLogin = () => {
    console.log("로그인 ")
  }

  // 소셜 로그인
  const goSocialLogin = (e) => {
    const {className} = e.target;
    console.log(className)
    if (className === "githubLogin" ) {
      console.log("깃허브로 로그인")
    } else if (className === "googleLogin") {
      console.log("구글로 로그인")
    }
  }

  
  return(
      <>
        <Txt txt="아이디" />
        <Input 
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Txt txt="비밀번호" />
        <Input 
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <Button
          txt="로그인"
          onClick={() => goLogin()}
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
            className="githubLogin"
            onClick={(e) => goSocialLogin(e)}
          />
          <Button
            txt="구글로 로그인(아마 아이콘)"
            className="googleLogin"
            onClick={(e) => goSocialLogin(e)}
          />
        </div>
      </>
  )
} 

export default Login;