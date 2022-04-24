import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./_read.module.scss";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import ReactiveButton from "reactive-button";
import Footer from "../../components/footer/footer";
import Error from "../etc/error";
import Swal from "sweetalert2";

const Read = ({ dbService, userId, functionService }) => {
  const [cardInfo, setCardInfo] = useState("");
  const [createdDate, setCreatedDate] = useState();
  const [manage, setManage] = useState(false);
  const [love, setLove] = useState(false);
  const [thumbnail, setThumbnail] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.state);
  const data = location.state.content;
  const memberThumbnail = data.member.memberThumbnail && data.member.memberThumbnail.fileName;
  const nickname = data.member.nickname;
  const id = data.postId;
  const onDelete = () => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      text: "신중하셔야 하옵니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dbService.postDelete(cardInfo.id);
        navigate("/");
        Swal.fire("삭제 완료", "정상적으로 삭제 되었습니다.", "success");
      }
    });
  };
  const encoder = async () => {
    if (data.postThumbnail != null) {
      const thumb = await dbService.encoderThumbnail(data.postThumbnail.fileName);
      setThumbnail(thumb);
    }
  };

  const goToWrite = async () => {
    navigate("/write", { state: { postId: id } });
  };
  const onLove = async () => {
    await functionService.love(cardInfo.id);
    setLove(!love);
  };

  const goToProfile = () => {
    return navigate(`/${nickname}/main`, { state: { memberThumbnail: memberThumbnail && memberThumbnail } });
  };

  const goToSeries = () => {
    const seriesName = cardInfo.seriesName;
    return navigate(`/${nickname}/series/${seriesName}`);
  };

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
      console.log(data);
      return;
    });
  }, [dbService, nickname, id, love]);
  useEffect(() => {
    return () => {
      setCardInfo(null);
    };
  }, [id]);
  useEffect(() => {
    if (userId) {
      if (userId.nickname === nickname) {
        setManage(true);
      } else {
        setManage(false);
      }
    }
  }, [userId, nickname]);
  useEffect(() => {
    encoder();
  }, [data]);
  return (
    <>
      {cardInfo ? (
        <div className={styles.read}>
          <div className={styles.title}>
            <div>{cardInfo.title}</div>
            <div className={styles.img}>
              {data.postThumbnail ? (
                <img src={thumbnail} alt="pic" />
              ) : (
                <img src={"https://picsum.photos/200"} alt="pic" />
              )}
            </div>
          </div>
          <div className={styles.meta_wrapper}>
            <div className={styles.meta}>
              <div className={styles.meta_data}>
                <div onClick={goToProfile}>{cardInfo.memberInfo.name}</div>
                <span>&nbsp;·&nbsp;</span>
                <div>{createdDate}</div>
              </div>
              {manage && (
                <div className={styles.meta_button}>
                  <ReactiveButton
                    style={{ borderRadius: "5px" }}
                    color={"light"}
                    idleText={"수정"}
                    onClick={goToWrite}
                  />
                  <ReactiveButton style={{ borderRadius: "5px" }} color={"red"} idleText={"삭제"} onClick={onDelete} />
                </div>
              )}
            </div>
            <div className={styles.tag}>
              {cardInfo.tags.map((data) => (
                <div># {data}</div>
              ))}
            </div>
          </div>
          <div className={styles.series}>
            <h1 onClick={goToSeries}>{cardInfo.seriesName}</h1>
          </div>
          <div className={styles.content}>
            <Viewer initialValue={cardInfo.content} />
          </div>
          <div className={styles.thumb}>
            <div>
              <span>도움 돼요!</span>
              <div onClick={onLove} className={styles.thumbsUp}>
                <FontAwesomeIcon icon={faThumbsUp} size={"2x"} />
              </div>
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
