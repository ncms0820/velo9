import react, { useState, useEffect } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

import VerifyEmail from "./pageCompnents/VerifyEmail";
import DoubleCheckPw from "./pageCompnents/DoubleCheckPw";
import CheckId from "./pageCompnents/CheckId";


const ChangePw = ( {page, setPage} ) => {

  const [nickName, setnickName] = useState(null) // 닉네임

  const [isCheckedId, setIsCheckedId] = useState(null) // null || boolean, 아이디 중복확인여부
  const [isVerified, setIsVerified] = useState(null) // null || boolean, 인증번호 확인여부
  const [isCheckedPw, setIsCheckedPw] = useState(null) // null || boolean, 비밀번호 체크여부

  // Test
  const [testVerifyNumber, setTestVerifyNumber] = useState("") // 인증번호 생성, 임시


  const finishChangePw = () => {
    if (!isCheckedPw || !isVerified) {
      alert("이메일 인증 및 비밀번호를 확인해주세요.")
      return
    }
    // 비밀번호 변경 로직
    setPage("login")
  }

  const finishSignup = () => {
    console.log("가입 완료")
    setPage('login')
  }


  return(
      <div className={styles.columnBox}>

        <VerifyEmail
          testVerifyNumber={testVerifyNumber}
          setIsVerified={setIsVerified}
          setTestVerifyNumber={setTestVerifyNumber}
          isVerified={isVerified}
        />

        <CheckId
          isCheckedId={isCheckedId}
          setIsCheckedId={setIsCheckedId}
        /> 

        <DoubleCheckPw 
          isCheckedPw={isCheckedPw}
          setIsCheckedPw={setIsCheckedPw}
        />

        <Txt txt="닉네임" />
        <Input 
          type="text"
          value={nickName}
          onChange={(e) => setnickName(e.target.value)}
        />

        <div className={styles.twoBtnBox}>
          <Button
            txt="돌아가기"
            className={styles.loginBtn}
            onClick={() => setPage("login")}
          />
          <Button
            txt="가입하기"
            className={styles.loginBtn}
            onClick={() => finishSignup()}
          />
        </div>

      </div>
  )
} 

export default ChangePw;