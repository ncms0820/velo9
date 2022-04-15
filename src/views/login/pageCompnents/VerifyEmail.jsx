import React, { useState, useEffect } from "react";
import styles from "../Login.module.scss";

// Components
import Txt from "../../../components/Txt";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

const VerifyEmail = ( { email, setEmail, setIsVerified, isVerified } ) => {

  // Test
  const [testVerifyNumber, setTestVerifyNumber] = useState("") // 인증번호 생성, 임시
  const [verifyNumber, setVerifyNumber] = useState('') // 인증번호 입력

  const confirmVerifyNumber = () => {
    if ( !testVerifyNumber || !verifyNumber) return
    if (verifyNumber === testVerifyNumber) {
      setIsVerified(true)
    } else if (verifyNumber !== testVerifyNumber) {
      setIsVerified(false)
    } 
  }
  
  // 테스트 인증번호 생성
  const CreateTextVerifyNumber = () => {
    if (!email) return // 이메일 형식 체크, 과다호출 등 방지 등 로직.
    let Number = "";
    for (let i = 0; i < 5; i++) {
      Number += Math.floor(Math.random() * 10)
    }
    setTestVerifyNumber(Number)
  }

  useEffect(() => {
    console.log(testVerifyNumber)
  }, [testVerifyNumber])

  
  return(
    <>
      <Txt txt="이메일 인증" />
      <div className={styles.inputAndBtn}>
        <Input 
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onEnter={CreateTextVerifyNumber}
        />
        <Button
          txt="인증 요청"
          onClick={CreateTextVerifyNumber}
        />
      </div>

      <div className={styles.inputAndBtn}>
        <Input 
          type="text"
          value={verifyNumber}
          onChange={(e) => setVerifyNumber(e.target.value)}
          onEnter={confirmVerifyNumber}
        />
        <Button
          txt="인증 번호 확인"
          onClick={confirmVerifyNumber}
        />

        <Txt  
          txt={
              isVerified 
              ? `인증에 성공했습니다.` 
              : isVerified === null
                ? null // 초기값만 아무것도 표시 안되게.
                : `인증 번호가 일치하지 않습니다.`
            } 
        />
      </div>
    </>
  )
}

export default VerifyEmail;