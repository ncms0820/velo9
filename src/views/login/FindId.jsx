import react, { useState } from "react";
import styles from "./Login.module.scss";
import axios from 'axios'

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

const FindId = ( { page, setPage, authService } ) => {

  const [email, setEmail] = useState('')
  const [findedId, setFindedId] = useState(null)

  const checkEmail = async () => {
    const url = "http://localhost:8080/findId"
    const body = {
      email: email
    }
    const res = await axios.post(url, body);
      try {
        // data 결과값
        setFindedId(res.data)
      } catch (e) {
        setFindedId("알수없는 에러로 실패하였습니다. 다시 시도해주세요.")
      }
    // 이후 로직, findId에 찾은 아이디를 넣어주면 됩니다.
    authService.findId(email)
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
            ? `가입한 아이디는 ${findedId} 입니다.` 
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