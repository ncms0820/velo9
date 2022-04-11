import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { forwardRef } from "react";
import styles from "./_card.module.scss";

const Card = forwardRef(({ content }, ref) => {
  const postThumbURL = content.postThumbnail.path;
  const memberURL = content.member.memberThumbnail.path;
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.img}>
        {postThumbURL ? <img src={postThumbURL} alt="pic" /> : <img src={"https://picsum.photos/200"} alt="pic" />}
      </div>
      <div className={styles.body}>
        <div>
          <h1>{content.title}</h1>
          <p>{content.introduce}</p>
        </div>
        <div className={styles.meta}>
          <span>6일전</span>
          <span>·</span>
          <span>2개의 댓글</span>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.foot_wrapper}>
          {memberURL ? <img src={memberURL} alt="pic" /> : <img src={require("../../service/img/6.png")} alt="" />}
          <span>by</span>
          <span>{content.member.nickname}</span>
        </div>
        <div className={styles.foot_wrapper2}>
          <FontAwesomeIcon icon={faHeart} />
          <span>{content.loveCount}</span>
        </div>
      </div>
    </div>
  );
});

export default Card;
