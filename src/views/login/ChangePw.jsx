import react, { useState, useEffect } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

import VerifyEmail from "./pageCompnents/VerifyEmail"
import DoubleCheckPw from "./pageCompnents/DoubleCheckPw"

const ChangePw = ( {page, setPage} ) => {

  const [id, setId] = useState('') // 아이디 입력
  const [isVerified, setIsVerified] = useState(null) // null || boolean, 인증번호 확인여부
  const [isCheckedPw, setIsCheckedPw] = useState(null) // null || boolean, 비밀번호 체크여부

  // Test
  const [testVerifyNumber, setTestVerifyNumber] = useState("") // 인증번호 생성, 임시

  const finishChangePw = () => {
    //아이디 확인절차 필요
    if (!isCheckedPw || !isVerified) {
      alert("이메일 인증 및 비밀번호를 확인해주세요.")
      return
    }
    // 비밀번호 변경 로직
    setPage("login")
  }
  
  return(
      <div className={styles.columnBox}>

        <VerifyEmail
          testVerifyNumber={testVerifyNumber}
          setIsVerified={setIsVerified}
          setTestVerifyNumber={setTestVerifyNumber}
          isVerified={isVerified}
        />

        <Txt txt="아이디를 입력해주세요" />
        <Input 
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <DoubleCheckPw 
          isCheckedPw={isCheckedPw}
          setIsCheckedPw={setIsCheckedPw}
          page={page}
        />

        <div className={styles.twoBtnBox}>
          <Button
            txt="돌아가기"
            onClick={() => setPage("login")}
          />
          <Button
            txt="비밀번호 변경완료"
            onClick={finishChangePw}
          />
        </div>
      </div>
  )
} 

export default ChangePw;