import React from "react";
import styles from "./_comment.module.scss";

const Comment = (props) => {
  return (
    <div className={styles.comment}>
      <div className={styles.top}>
        <div className={styles.img}>image</div>
        <div className={styles.nick_name}>
          <span>사용자 닉네임</span>
          <span>작성 시간</span>
        </div>
        <div>
          <span>댓글 작성</span>
        </div>
      </div>
      <div>
        <span>댓글 내용을 작성하는 영역</span>
      </div>
    </div>
  );
};

export default Comment;
