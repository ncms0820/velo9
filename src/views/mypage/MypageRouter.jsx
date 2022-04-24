import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./mypage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

// page
import MypageHeader from "./MypageHeader";
import Post from "./Post";
import Series from "./Series";
import TagHandlerMobile from "./TagHandlerMobile";

import { getMyPosts, getMySeries, getTags } from "./mypageService";

const MypageRouter = ({ dbService, functionService }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const { nickname } = useParams();
  const [tapState, setTapState] = useState("post"); // post, series, introduce는 보류
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [serieses, setSerieses] = useState([]);

  const [tags, setTags] = useState(null);

  const getContents = async () => {
    if (tapState === "post") {
      const result = await dbService.memberMain(nickname, 0);
      const newPost = getMyPosts(result, searchValue);
      setPosts(newPost);
    } else if (tapState === "series") {
      const result = await dbService.getSeries(nickname);
      const newSeries = getMySeries(result, searchValue);
      setSerieses(newSeries);
    }
  };

  // posts는 모든 글에서 받아온 기준으로!
  useEffect(() => {
    if (!posts.length) return; // 포스트 없으면 실행이 안됨. not property
    if (tags !== null) return;
    const newTags = getTags(posts);
    setTags(newTags);
  }, [posts]);

  /*검색어에 따른 posts filter조건*/
  useEffect(() => {
    getContents();
  }, [tapState, searchValue]);

  useEffect(() => {
    setSearchValue("");
  }, [tapState]);

  const GoReadPage = (post) => {
    navigate("/read", {
      state: { content: { member: { nickname: nickname }, postId: post.id } },
    });
  };

  return (
    <div className={styles.mypageBox}>
      <MypageHeader setTapState={setTapState} tapState={tapState} setSearchValue={setSearchValue} />

      {tapState === "post" && (
        <TagHandlerMobile
          dbService={dbService}
          tags={tags}
          nickname={nickname}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setPosts={setPosts}
        />
      )}

      <div className={styles.mypageContent}>
        {/* 포스트일때 */}
        {tapState === "post" &&
          posts.length !== 0 &&
          posts.map((post, idx) => {
            return <Post key={idx} dbService={dbService} post={post} onClick={() => GoReadPage(post)} />;
          })}

        {/* 시리즈일때 */}
        {tapState === "series" &&
          serieses.length !== 0 &&
          serieses.map((series, idx) => {
            return (
              <Series
                key={idx}
                series={series}
                nickname={nickname}
                dbService={dbService}
                functionService={functionService}
                searchValue={searchValue}
                setSerieses={setSerieses}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MypageRouter;
