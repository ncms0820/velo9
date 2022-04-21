import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./mypage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

// Components
import Button from "../../components/Button";

// page
import MypageHeader from "./MypageHeader";
import Post from "./Post";
import Series from "./Series";
import TagHandlerMobile from "./TagHandlerMobile";
import TagHandlerDesktop from "./TagHandlerDesktop";


const MypageRouter = ( { userId, dbService } ) => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState(userId.nickname)
  const [tapState, setTapState] = useState('post') // post, series, introduce는 보류
  const [searchValue, setSearchValue] = useState('')

  const [posts, setPosts] = useState([])
  const [serieses, setSerieses] = useState([])
  
  const getMyPosts = async () => {
    const result = await dbService.memberMain(nickname, 0)
    setPosts(result.data.data.content)
    console.log(result.data.data.content)
  }
  
  const getMySeries = async() => {
    const result = await dbService.getSeries(nickname)
    setSerieses(result.data.subData)
  }
  
  useEffect(() => {
    setNickname(userId.nickname)
    getMyPosts()
    getMySeries()
  }, [nickname])

  const testGoReadPage = (post) => {
    console.log("클릭됨")
    navigate("/read", {
      state: { content: { member: { nickname: userId.nickname }, postId: post.id } },
    });
  }

  return (
    <div className={styles.mypageBox}>

      <MypageHeader
        setTapState={setTapState}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TagHandlerMobile
        dbService={dbService}
        posts={posts}
      />

      <div className={styles.mypageContent}>
        {/* 포스트일때 */}
        { tapState === "post" && posts.length &&
          posts.map( (val, idx) => {
          return <Post
                    key={idx}
                    post={val}
                    onClick={ (post) => testGoReadPage(post)}
                  />
          })
        }
        {/* 시리즈일때 */}
        { tapState === "series" && serieses.length &&
          serieses.map( (data, idx) => {
          return <Series
                    key={idx}
                    data={data.seriesName}
                    dbService={dbService}
                    nickname={nickname}
                  />
          })
        }
      </div>
    </div>
  );
};

export default MypageRouter;
