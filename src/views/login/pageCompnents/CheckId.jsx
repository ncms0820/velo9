import React, { useState, useEffect } from "react";
import styles from "../Login.module.scss";

// Components
import Txt from "../../../components/Txt";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const CheckId = ({ id, setId, isCheckedId, setIsCheckedId, authService }) => {
  const 아이디중복확인 = async () => {
    console.log("아이디중복확인");
    const checkId = await authService.validateUsername(id);
    setIsCheckedId(checkId);
  };

  return (
    <>
      <Txt txt="아이디" />
      <div className={styles.inputAndBtn}>
        <Input type="text" value={id} onChange={(e) => setId(e.target.value)} onEnter={아이디중복확인} />
        <Button txt="아이디 중복확인" onClick={아이디중복확인} />
      </div>
      <Txt
        txt={
          isCheckedId
            ? "아이디 사용이 가능합니다"
            : isCheckedId === null
            ? null // 초기값만 아무것도 표시 안되게.
            : "사용이 불가능한 아이디입니다."
        }
      />
    </>
  );
};

export default CheckId;
