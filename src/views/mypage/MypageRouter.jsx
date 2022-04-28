import { useState, useEffect, useRef } from "react";
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
import MypageProfile from "./MypageProfile";

import PostPage from "./postPage/PostPage";

const MypageRouter = ({ dbService, functionService }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { nickname } = useParams();
  const lastPostRef = useRef(null);

  const [tapState, setTapState] = useState("post"); // post, series, introduce는 보류
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [serieses, setSerieses] = useState([]);
  const [nowPages, setNowPages] = useState(0)

  const [tags, setTags] = useState(null);
  
  // db에서 받아온 post를 post state에 세팅
  const setPostContents = async() => {
    const result = await dbService.memberMain(nickname, nowPages);
    console.log(result)
    const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
    const nextPages = nowPages + 1 
    setNowPages(nextPages)
    setPosts([...posts, ...newPost]); // 만약 이전포스트가 있다면 이전포스트에 추가하는 형태로 하면되는데... 
  }

  // db에서 받아온 series를 series state에 세팅
  const setSeriesContents = async() => {
    const result = await dbService.getSeries(nickname);
    const newSeries = getMySeries(result, searchValue);
    setSerieses(newSeries);
  }

  //로직을
  // 받아온다 - 필터링 - 추가 의 로직으로 가자 .
  
  // useEffect( () => {
  //   testFunc()
  // }, [nowPages])
  
  // const testFunc = async() => {
  //   if(nowPages >0) {
  //     const result = await dbService.memberMain(nickname, nowPages);
  //     // console.log(" 다음페이지 테스트", result) // 탭이 왔다-갔다 할때만 바뀜
  //   }
  // }

  // posts는 모든 글에서 받아온 기준으로!
  useEffect(() => {
    if (!posts.length) return; // 포스트 없으면 실행이 안됨. not property
    if (tags !== null) return;
    const newTags = getTags(posts);
    setTags(newTags);
  }, [posts]);


  /*검색어에 따른 posts filter조건*/
  useEffect(() => {
    setPostContents();
    setSeriesContents();
    console.log("현재 페이지값:", nowPages)
  }, [searchValue]); // 탭이 왔다-갔다 할때만 바뀜
  // tap State가 바뀌면서 두번 추가된거지 지금. 


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
      
      <MypageProfile
        dbService={dbService}
        nickname={nickname}
        thumbnail={location.state?.thumbnail}
      />

      <MypageHeader
        setTapState={setTapState}
        tapState={tapState}
        setSearchValue={setSearchValue}
      />

      { tapState === "post" &&
        <TagHandlerMobile
          dbService={dbService}
          tags={tags}
          nickname={nickname}
          setSearchValue={setSearchValue}
          setPosts={setPosts}
        />
      }

      <div className={styles.mypageContent}>
        {/* 포스트일때 */}
        {tapState === "post" &&
          posts.length !== 0 &&
          <PostPage 
            posts={posts}
            dbService={dbService}
            nickname={nickname}
            searchValue={searchValue}
          />
          // posts.map((post, idx, arr) => {
          //   return <Post 
          //             key={idx}
          //             ref={idx === arr.length - 1 ? lastPostRef : null} // 마지막 항목일때만 추가
          //             dbService={dbService} 
          //             post={post} 
          //             onClick={() => GoReadPage(post)} 
          //           />;
          // })
          }


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
