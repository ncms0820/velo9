import React, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

import VerifyEmail from "./pageCompnents/VerifyEmail";
import DoubleCheckPw from "./pageCompnents/DoubleCheckPw";

const ChangePw = ({ page, setPage, authService }) => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState(""); // 아이디 입력
  const [newPw, setNewPw] = useState(""); // 비밀번호

  const [isVerified, setIsVerified] = useState(null); // null || boolean, 인증번호 확인여부
  const [isCheckedPw, setIsCheckedPw] = useState(null); // null || boolean, 비밀번호 체크여부

  const finishChangePw = async () => {
    if (!isCheckedPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    // 임시 주석처리
    // if (!isVerified) {
    //   alert("이메일 인증이 필요합니다.")
    //   return
    // }
    const findedMemberId = await authService.findPw(id, email);
    console.log(findedMemberId.data, newPw);
    const result = await authService.changePassword(findedMemberId.data, newPw);
    if (result) setPage("login");
  };

  return (
    <>
      <VerifyEmail
        email={email}
        setEmail={setEmail}
        setIsVerified={setIsVerified}
        isVerified={isVerified}
        authService={authService}
        page={page}
      />

      <Txt txt="아이디를 입력해주세요" />
      <Input type="text" value={id} onChange={(e) => setId(e.target.value)} />

      <DoubleCheckPw
        newPw={newPw}
        setNewPw={setNewPw}
        isCheckedPw={isCheckedPw}
        setIsCheckedPw={setIsCheckedPw}
        page={page}
      />

      <div className={styles.twoBtnBox}>
        <Button txt="돌아가기" onClick={() => setPage("login")} />
        <Button txt="비밀번호 변경완료" onClick={finishChangePw} />
      </div>
    </>
  );
};

export default ChangePw;
