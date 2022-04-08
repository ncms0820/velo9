import react, { useState } from "react";
import styles from "./Login.module.scss";

// Components
import Button from "../../components/Button";
import Input from "../../components/Input";
import Txt from "../../components/Txt";

const FindId = ( {page, setPage} ) => {

  const [showId, setShowId] = useState('')

  const onChangeTest = (e, param) => {
    console.log("파라메터 없음")
  }

  return(
      <div className={styles.columnBox}>

        <Txt txt="가입한 이메일을 입력해주세요" />
        <Input 
          type="text"
          className={styles.idInput}
          onChange={onChangeTest}
          placeholder={"아이디를 입력해주세요"}
          />
        <Txt 
          txt={showId} 
        />
        <Button
          className={styles.findIdBtn}
          txt={"아이디 찾기"}
        />

        <div className={styles.twoBtnBox}>
          <Button
            txt="돌아가기"
            className={styles.joinBtn}
            onClick={() => setPage("login")}
          />
          <Button
            txt="비밀번호 변경하기"
            className={styles.findUserBtn}
            onClick={() => setPage("changePw")}
          />
        </div>

      </div>
  )
} 

export default FindId;