import React from "react";
import styles from "./_footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Footer = ({ prev, next, nickname }) => {
  const navigate = useNavigate();
  function goToPage(id, nickname) {
    //prev.id ? prev.title
    const data = { postId: id, member: { nickname: nickname } };
    navigate("/read", { state: { content: data } });
    window.scroll({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={styles.footer}>
      {prev ? (
        <div className={styles.left} onClick={() => goToPage(prev.id, nickname)}>
          <FontAwesomeIcon icon={faCircleArrowLeft} size={"2x"} color={"black"} />
          <div>
            <span>이전 포스트</span>
            <span>{prev.title}</span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {next && (
        <div className={styles.right} onClick={() => goToPage(next.id, nickname)}>
          <div>
            <span>다음 포스트</span>
            <span>{next.title}</span>
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} size={"2x"} color={"black"} />
        </div>
      )}
    </div>
  );
};

export default Footer;
