import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./_read.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Comment from "../../components/comment/comment";

const Read = (props) => {
  const location = useLocation();
  const data = location.state.content;
  return (
    <div className={styles.read}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.meta}>
        <div>
          <div>작성자</div>
          <div>날짜</div>
        </div>
        <div>
          <div>수정</div>
          <div>삭제</div>
        </div>
      </div>
      <div className={styles.tag}>
        <h1>태그목록</h1>
      </div>
      <div className={styles.series}>
        <h1>시리즈 목록</h1>
      </div>
      <div className={styles.content}>
        <h1>글 영역</h1>
      </div>
      <div className={styles.thumb}>
        <div>
          <span>도움 돼요!</span>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>21</span>
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default Read;
