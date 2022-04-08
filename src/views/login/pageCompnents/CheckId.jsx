import React, { useState, useEffect } from "react";
import styles from "../Login.module.scss";

// Components
import Txt from "../../../components/Txt";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const CheckId = ( { isCheckedId, setIsCheckedId } ) => {

  const [id, setId] = useState('') // 아이디 입력

  const 아이디중복확인 = () => {
    console.log("아이디중복확인")
    // setIsCheckedId()
  }
  
  return(
    <>
        <Txt txt="아이디" />
        <div className={styles.inputAndBtn}>
          <Input 
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button
            txt="아이디 중복확인"
            onClick={아이디중복확인}
          />
        </div>
        <Txt  
        txt={
            isCheckedId 
            ? "비밀번호가 일치합니다"
            : isCheckedId === null
              ? null // 초기값만 아무것도 표시 안되게.
              : "비밀번호가 일치하지 않습니다."
          } 
        />
    </>
  )
}

export default CheckId;