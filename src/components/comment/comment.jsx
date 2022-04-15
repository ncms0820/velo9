import React from "react";
import styles from "./_comment.module.scss";
import ReactiveButton from "reactive-button";
const Comment = (props) => {
  return (
    <div className={styles.comment}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.img}>
            <img src={"https://picsum.photos/200"} alt="pic" />
          </div>
          <div className={styles.nick_name}>
            <span>사용자 닉네임</span>
            <span>작성 시간</span>
          </div>
        </div>
        <div>
          <ReactiveButton style={{ borderRadius: "5px" }} color={"dark"} idleText={"댓글 작성"} />
        </div>
      </div>
      <div className={styles.comment}>
        <textarea rows="3"></textarea>
      </div>
    </div>
  );
};

export default Comment;
