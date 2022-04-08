import react, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt"

const ChangePw = ( {page, setPage} ) => {

  const onChangeTest = (e) => {
    console.log("파라메터 없음")
  }

  const finishSignup = () => {
    console.log("가입 완료")
    setPage('login')
  }


  return(
      <div className={styles.columnBox}>

        <Txt txt="아이디" />
        <div className={styles.inputAndBtn}>
          <Input 
            type="password"
            className={styles.pwInput}
            onChange={onChangeTest}
            eventParam={["t1"]}
          />
          <Button
            txt="아이디 중복확인"
            className={styles.loginBtn}
          />
        </div>
        <Txt txt ={"사용 가능한 아이디입니다."} />

        <Txt txt="닉네임" />
        <Input 
          type="text"
          className={styles.pwInput}
          onChange={onChangeTest}
          eventParam={["t1"]}
        />

        <Txt txt="비밀번호" />
        <Input 
          type="password"
          className={styles.pwInput}
          onChange={onChangeTest}
        />
         <Txt txt="비밀번호 확인" />
        <Input 
          type="password"
          className={styles.pwInput}
          onChange={onChangeTest}
        />
        <Txt txt ={"비밀번호가 일치합니다."} />

        <Txt txt ="이메일 인증" />
        <div className={styles.inputAndBtn}>
          <Input 
            type="text"
            className={styles.idInput}
            onChange={onChangeTest}
          />
          <Button
            txt="인증 요청"
            className={styles.loginBtn}
          />
        </div>

        <div className={styles.inputAndBtn}>
          <Input 
            type="text"
            className={styles.idInput}
            onChange={onChangeTest}
          />
          <Button
            txt="인증번호 확인"
            className={styles.loginBtn}
          />
        </div>
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