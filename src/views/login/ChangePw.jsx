import react, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

const ChangePw = ( {page, setPage} ) => {

  const onChangeTest = (e, param) => {
    console.log("파라메터 없음")
  }
  
  const finishChangePw = () => {
    console.log("비밀번호 변경됨.")
    setPage('login')
  }

  return(
      <div className={styles.columnBox}>

        <Txt txt="아이디를 입력해주세요" />
        <div className={styles.inputAndBtn}>
          <Input 
            type="text"
            className={styles.idInput}
            onChange={onChangeTest}
          />
          <Button
            txt="아이디 중복확인"
            className={styles.loginBtn}
          />
        </div>

        <span> {"사용 가능, 불가능 아이디"} </span>
          
        <Txt txt="이메일 인증" />
        <div className={styles.inputAndBtn}>
          <Input 
            type="password"
            className={styles.pwInput}
            eventParam={["t1"]}
          />
          <Button
            txt="로그인"
            className={styles.loginBtn}
          />
        </div>

        <div className={styles.inputAndBtn}>
          <Input 
            type="password"
            className={styles.pwInput}
            eventParam={["t1"]}
          />
          <Button
            txt="로그인"
            className={styles.loginBtn}
          />
        </div>
          <span> {"인증완료"} </span>

          <Txt txt="새로운 비밀번호" />
          <Input 
            type="password"
            className={styles.pwInput}
            eventParam={["t1"]}
          />



          <span>새로운 비밀번호 확인</span>
          <Input 
            type="password"
            className={styles.pwInput}
            eventParam={["t1"]}
          />

          <span>{"비밀번호가 일치/불일치합니다"}</span>

          <div className={styles.twoBtnBox}>
            <Button
              txt="로그인 페이지로"
              className={styles.joinBtn}
              onClick={() => setPage("login")}
            />
            <Button
              txt="비밀번호 변경완료"
              className={styles.findUserBtn}
              onClick={() => finishChangePw()}
            />
        </div>
      </div>
  )
} 

export default ChangePw;