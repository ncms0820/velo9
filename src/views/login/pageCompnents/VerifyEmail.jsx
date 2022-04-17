import React, { useState, useEffect } from "react";
import styles from "../Login.module.scss";

// Components
import Txt from "../../../components/Txt";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import AuthService from "../../../service/auth_service";

const VerifyEmail = ( { email, setEmail, setIsVerified, isVerified, authService } ) => {

  const [verifyNumber, setVerifyNumber] = useState('') // 인증번호 입력

  const confirmVerifyNumber = () => {
    const checkEmail = AuthService.certify(verifyNumber)
    setIsVerified(checkEmail);
  }
  
  // 테스트 인증번호 생성
  const requestVerifyNumber = async () => {
    alert("인증번호가 발송되었습니다.")
    await authService.sendMail(email)
  }

  
  return(
    <>
      <Txt txt="이메일 인증" />
      <div className={styles.inputAndBtn}>
        <Input 
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onEnter={requestVerifyNumber}
        />
        <Button
          txt="인증 요청"
          onClick={requestVerifyNumber}
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