import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./_read.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Comment from "../../components/comment/comment";
import ReactiveButton from "reactive-button";
import Footer from "../../components/footer/footer";
const Read = (props) => {
  const [list, setList] = useState(false);
  const location = useLocation();
  const data = location.state.content;
  return (
    <div className={styles.read}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.meta}>
        <div className={styles.meta_data}>
          <div>dramatic</div>
          <span>·</span>
          <div>2022년 4월 3일</div>
        </div>
        <div className={styles.meta_button}>
          <ReactiveButton style={{ borderRadius: "5px" }} color={"primary"} idleText={"수정"} />
          <ReactiveButton style={{ borderRadius: "5px" }} color={"red"} idleText={"삭제"} />
        </div>
      </div>
      <div className={styles.tag}>
        <div># Java Script</div>
      </div>
      <div className={styles.img}>
        {console.log(data)}
        {data.postThumbnail.path ? (
          <img src={data.postThumbnail.path} alt="pic" />
        ) : (
          <img src={"https://picsum.photos/200"} alt="pic" />
        )}
      </div>
      <div className={styles.series}>
        <h1>Spring</h1>
        <div onClick={() => setList(!list)}>
          <FontAwesomeIcon icon={faCaretDown} />
          <span>목록 보기</span>
        </div>
        {list && <div> hi</div>}
      </div>
      <div className={styles.content}>
        <h1>{data.introduce}</h1>
      </div>
      <div className={styles.thumb}>
        <div>
          <span>도움 돼요!</span>
          <FontAwesomeIcon icon={faThumbsUp} size={"2x"} color={"#f73939"} />
          <span>21</span>
        </div>
      </div>
      <Comment />
      <Footer />
    </div>
  );
};

export default Read;
