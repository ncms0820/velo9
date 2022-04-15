import react, { useState, useEffect } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

import VerifyEmail from "./pageCompnents/VerifyEmail";
import DoubleCheckPw from "./pageCompnents/DoubleCheckPw";
import CheckId from "./pageCompnents/CheckId";

const ChangePw = ({ page, setPage, setOnLoginModal }) => {
  const [nickName, setnickName] = useState(null); // 닉네임

  const [isCheckedId, setIsCheckedId] = useState(null); // null || boolean, 아이디 중복확인여부
  const [isVerified, setIsVerified] = useState(null); // null || boolean, 인증번호 확인여부
  const [isCheckedPw, setIsCheckedPw] = useState(null); // null || boolean, 비밀번호 체크여부

  // Test
  const [testVerifyNumber, setTestVerifyNumber] = useState(""); // 인증번호 생성, 임시

  const finishSignup = () => {
    if (!isCheckedId) {
      alert("아이디 중복체크가 필요합니다.");
      return;
    }
    if (!isVerified) {
      alert("이메일 인증이 필요합니다.");
      return;
    }
    if (!isCheckedPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    console.log("가입 완료"); //가입로직
    setOnLoginModal(false);
    setPage("login");
  };

  return (
    <>
      <VerifyEmail
        testVerifyNumber={testVerifyNumber}
        setIsVerified={setIsVerified}
        setTestVerifyNumber={setTestVerifyNumber}
        isVerified={isVerified}
      />

      <CheckId isCheckedId={isCheckedId} setIsCheckedId={setIsCheckedId} />

      <DoubleCheckPw isCheckedPw={isCheckedPw} setIsCheckedPw={setIsCheckedPw} />

      <Txt txt="닉네임" />
      <Input type="text" value={nickName} onChange={(e) => setnickName(e.target.value)} />

      <div className={styles.twoBtnBox}>
        <Button txt="돌아가기" onClick={() => setPage("login")} />
        <Button txt="가입하기" onClick={finishSignup} />
      </div>
    </>
  );
};

export default ChangePw;
