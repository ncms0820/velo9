import React from "react";
import styles from "./_card.module.scss";

const Card = (props) => (
  <div className={styles.card}>
    <div className={styles.img}>image</div>
    <div className={styles.body}>
      <h1>title</h1>
      <p>content</p>
    </div>
    <div className={styles.meta}>
      <span>6일전</span>
      <span>2개의 댓글</span>
    </div>
    <div className={styles.foot}></div>
  </div>
);

export default Card;
