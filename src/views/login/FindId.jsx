import react, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";

const FindId = () => {

  const onChangeTest = (e, param) => {
    console.log("파라메터 없음")
  }
  
  const onChangeTestParams = (e, param) => {
    console.log(param)
    console.log(...param, "이게 파라메터들임")
  }


  return(
      <div className={styles.loginHeaderBox}>
        <span>가입한 이메일을 입력해주세요</span>
        <Input 
          type="text"
          className={styles.idInput}
          onChange={onChangeTest}
          placeholder={"아이디를 입력해주세요"}
        />
        <Button
          className={styles.findIdBtn}
          txt={"아이디 찾기"}
        />
        <span>
          {"텍스트"}
        </span>
      </div>
  )
} 

export default FindId;