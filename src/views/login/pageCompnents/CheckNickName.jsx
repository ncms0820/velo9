import React, { useState, useEffect } from "react";
import styles from "../Login.module.scss";

// Components
import Txt from "../../../components/Txt";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const CheckNickName = ({ nickName, setNickName, isCheckedNickName, setIsCheckedNickName, authService }) => {
  const checkNickName = async () => {
    console.log(nickName);
    const checkNick = await authService.validateNickname(nickName);
    console.log(checkNick.data);
    setIsCheckedNickName(checkNick);
  };

  return (
    <>
      <Txt txt="닉네임" />
      <div className={styles.inputAndBtn}>
        <Input type="text" value={nickName} onChange={(e) => setNickName(e.target.value)} />
        <Button txt="닉네임 중복검사" onClick={checkNickName} />
      </div>
      <Txt
        txt={
          isCheckedNickName
            ? "닉네임 사용이 가능합니다"
            : isCheckedNickName === null
            ? null // 초기값만 아무것도 표시 안되게.
            : "사용이 불가능한 닉네임입니다."
        }
      />
    </>
  );
};

export default CheckNickName;
