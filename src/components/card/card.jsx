import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./_card.module.scss";

const Card = (props) => (
  <div className={styles.card}>
    <div className={styles.img}>
      <img src={require("../../service/img/test1.gif")} alt="pic" />
    </div>
    <div className={styles.body}>
      <div>
        <h1>신입으로 임원 면접을 준비할 때</h1>
        <p>
          2차 면접 중 얼타는 절 보고 있는 면접관들의 속 마음 상상도,gif 혹시 기숙면접과 임원면접의 차이점에 대해서 알고
          계신가요? 첫장소는 케이크 핫케이크 딸기 케이크 고구마 케이크 뭔가 또 있는게 있을까
        </p>
      </div>
      <div className={styles.meta}>
        <span>6일전</span>
        <span>·</span>
        <span>2개의 댓글</span>
      </div>
    </div>
    <div className={styles.foot}>
      <div className={styles.foot_wrapper}>
        <img src={require("../../service/img/6.png")} alt="" />
        <span>by</span>
        <span>wongue_shin</span>
      </div>
      <div className={styles.foot_wrapper2}>
        <FontAwesomeIcon icon={faHeart} />
        <span>77</span>
      </div>
    </div>
  </div>
);

export default Card;
