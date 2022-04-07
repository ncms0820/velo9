import react, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";

const ChangePw = () => {

  const onChangeTest = (e, param) => {
    console.log("파라메터 없음")
  }
  
  const onChangeTestParams = (e, param) => {
    console.log(param)
    console.log(...param, "이게 파라메터들임")
  }


  return(
      <div className={styles.loginBox}>

        <div className={styles.idPwBox}>
          <span>아이디를 입력해주세요</span>
          <Input 
            type="text"
            className={styles.idInput}
            onChange={onChangeTest}
          />
          <Button
            txt="아이디 중복확인"
            className={styles.loginBtn}
          />

          <span span> {"사용 가능, 불가능 아이디"} </span>
        </div>

        <div>
          <span>이메일 인증</span>
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
<hr/>

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
<hr/>
          <span> {"인증완료"} </span>
        </div>

        <div className={styles.joinFindBox}>
          <span>새로운 비밀번호</span>
          <Input 
            type="password"
            className={styles.pwInput}
            onChange={onChangeTestParams}
            eventParam={["t1"]}
          />
 <hr/>

        </div>

        <div className={styles.socialLoginBox}>
 
          <span>새로운 비밀번호 확인</span>
          <Input 
            type="password"
            className={styles.pwInput}
            onChange={onChangeTestParams}
            eventParam={["t1"]}
          />
<hr/>

        </div>
        <div>
          <span>{"비밀번호가 일치/불일치합니다"}</span>
          <Button
            txt="비밀번호 변경"
            className={styles.loginBtn}
          />
        </div>
      </div>
  )
} 

export default ChangePw;