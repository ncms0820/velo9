import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./_read.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Comment from "../../components/comment/comment";
import ReactiveButton from "reactive-button";
import Footer from "../../components/footer/footer";
import Error from "../etc/error";
const Read = ({ dbService }) => {
  const [list, setList] = useState(false);
  const [cardInfo, setCardInfo] = useState("");
  const [createdDate, setCreatedDate] = useState();
  const location = useLocation();
  const data = location.state.content;
  const nickname = data.member.nickname;
  const id = data.postId;
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      const data = dbService.getPostDetail(nickname, id);
      resolve(data);
      reject("카드 정보 가져오기 실패");
    });
    promise.then((data) => {
      const time = data.createdDate.split("-");
      setCreatedDate(`${time[0]}년 ${time[1]}월 ${time[2]}일`);
      setCardInfo(data);
      return;
    });
  }, [dbService, nickname, id]);
  return (
    <>
      {cardInfo ? (
        <div className={styles.read}>
          <div className={styles.title}>{cardInfo.title}</div>
          <div className={styles.meta}>
            <div className={styles.meta_data}>
              <div>{cardInfo.memberInfo.name}</div>
              <span>&nbsp;·&nbsp;</span>
              <div>{createdDate}</div>
            </div>
            <div className={styles.meta_button}>
              <ReactiveButton style={{ borderRadius: "5px" }} color={"primary"} idleText={"수정"} />
              <ReactiveButton style={{ borderRadius: "5px" }} color={"red"} idleText={"삭제"} />
            </div>
          </div>
          <div className={styles.tag}>
            {cardInfo.tags.map((data) => (
              <div># {data}</div>
            ))}
          </div>
          <div className={styles.img}>
            {data.postThumbnail ? (
              <img src={data.postThumbnail} alt="pic" />
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
            <h1>{cardInfo.content}</h1>
          </div>
          <div className={styles.thumb}>
            <div>
              <span>도움 돼요!</span>
              <FontAwesomeIcon icon={faThumbsUp} size={"2x"} color={"#f73939"} />
              <span>{cardInfo.loveCount}</span>
            </div>
          </div>
          {/* <Comment />  나중에 disqus api 활용해볼것*/}
          <Footer prev={cardInfo.prevPost} next={cardInfo.nextPost} nickname={nickname} />
        </div>
      ) : (
        <Error title={" Loading"} />
      )}
    </>
  );
};

export default Read;
