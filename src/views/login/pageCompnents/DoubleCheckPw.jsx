import React, { useState, useEffect } from "react";
import styles from "../Login.module.scss";

// Components
import Txt from "../../../components/Txt";
import Input from "../../../components/Input";

const DoubleCheckPw = ( {newPw, setNewPw,  isCheckedPw, setIsCheckedPw, page } ) => {

  const [newPwCheck, setNewPwCheck] = useState('') // 새 비밀번호 확인

    // 비밀번호 체크 (onChange)
    useEffect(() => {
      if ( !newPw && !newPwCheck) return
      if (newPw === newPwCheck) {
        setIsCheckedPw(true)
      } else if (newPw !== newPwCheck) {
        setIsCheckedPw(false)
      } 
    }, [newPw, newPwCheck])
  
  return(
    <>
      <Txt txt={page === "changePw" ? "새로운 비밀번호" : "비밀번호"} />
      <Input 
        type="password"
        value={newPw}
        onChange={(e) => setNewPw(e.target.value)}
      />

      <Txt txt={page === "changePw" ? "새로운 비밀번호 확인" : "새로운 비밀번호"} />
      <Input 
        type="password"
        value={newPwCheck}
        onChange={(e) => setNewPwCheck(e.target.value)}
      />

      <Txt  
        txt={
            isCheckedPw 
            ? "비밀번호가 일치합니다"
            : isCheckedPw === null
              ? null // 초기값만 아무것도 표시 안되게.
              : "비밀번호가 일치하지 않습니다."
          } 
      />
    </>
  )
}

export default DoubleCheckPw;