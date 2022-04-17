import { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

const FindId = ( { setPage, authService } ) => {

  const [email, setEmail] = useState('')
  const [findedId, setFindedId] = useState(null)

  const checkEmail = async () => {
    const result = await authService.findId(email)
    setFindedId(result)
  }

  return(
      <>
        <Txt txt="가입한 이메일을 입력해주세요" />
        <Input 
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          onEnter={checkEmail}
          value={email}
          placeholder="input Email"
          />
        <Button
          onClick={checkEmail}
          txt={"아이디 찾기"}
        />
        <Txt 
          txt={
            findedId 
            ? `${email}로 가입한 아이디가 전송되었습니다.` 
            : findedId === null
              ? null // 초기값만 아무것도 표시 안되게.
              : `가입한 아이디가 아닙니다.`
          } 
        />

        <div className={styles.twoBtnBox}>
          <Button
            txt="돌아가기"
            onClick={() => setPage("login")}
          />
          <Button
            txt="비밀번호 변경하기"
            onClick={() => setPage("changePw")}
          />
        </div>
      </>
  )
} 

export default FindId;