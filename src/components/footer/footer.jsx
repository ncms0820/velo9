import React from "react";
import styles from "./_footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Footer = (props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.footer}>
      <div className={styles.left} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size={"2x"} color={"#2ed4a3"} />
        <div>
          <span>이전 포스트</span>
          <span>포스트 제목이 입력되는 영역입니다</span>
        </div>
      </div>
      <div className={styles.right} onClick={() => navigate(1)}>
        <div>
          <span>다음 포스트</span>
          <span>포스트 제목이 입력되는 영역입니다</span>
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} size={"2x"} color={"#2ed4a3"} />
      </div>
    </div>
  );
};

export default Footer;
