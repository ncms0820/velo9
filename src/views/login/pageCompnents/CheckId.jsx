import React from "react";
import styles from "../Login.module.scss";
import { LoginService } from "../loginService"

// Components
import Txt from "../../../components/Txt";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const CheckId = ({ id, setId, isCheckedId, setIsCheckedId, authService }) => {

  const loginService = new LoginService();

  const checkCanUseId = async () => {
    if (id.length < 6) {
      setIsCheckedId("shot");
      return
    } else if (!loginService.useEngAndNum(id)) {
      setIsCheckedId("useOther");
    }
    else {
      const reusult = await authService.validateUsername(id); // true, false 받아옴.
      console.log(reusult)
      setIsCheckedId(reusult ? "ok" : "duplication");
    }
  };

  const idMessage = (state) => {
    if (state === "") return ""
    else if (state === "duplication") return "이미 가입 된 아이디입니다."
    else if (state === "shot") return "아이디가 너무 짧습니다."
    else if (state === "ok") return "사용 가능한 아이디입니다."
    else if (state === "useOther") return "아이디는 영문 및 숫자만 입력 가능합니다."
  }

  return (
    <>
      <Txt txt="아이디" />
      <div className={styles.inputAndBtn}>
        <Input type="text" value={id} onChange={(e) => setId(e.target.value)} onEnter={checkCanUseId} />
        <Button txt="아이디 중복확인" onClick={checkCanUseId} />
      </div>
      <Txt
        txt={ idMessage(isCheckedId)
          // isCheckedId
          //   ? "아이디 사용이 가능합니다"
          //   : isCheckedId === null
          //   ? null // 초기값만 아무것도 표시 안되게.
          //   : "사용이 불가능한 아이디입니다."
        }
      />
    </>
  );
};

export default CheckId;
