import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./mypage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import MypageHeader from "./MypageHeader";
import Post from "./Post";
import { dummyData } from "./dummy";
import Series from "./Series";
import TagHandlerDesktop from "./TagHandlerDesktop";
import TagHandlerMobile from "./TagHandlerMobile";

// Components

// page


const MypageRouter = ( { userId, dbService } ) => {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState(userId.nickname)
  const [tapState, setTapState] = useState('post') // post, series, introduce는 보류
  const [searchValue, setSearchValue] = useState('')
  const [tags, setTags] = useState() //태그 목록 따로 저장, object Array

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

  const getTags = () => {
    const newTags = new Object();
    if (!posts.length) return
    for (let post of posts) {
      for(let tag of post.tags) {
        if (!newTags.hasOwnProperty(tag)) { // 
          newTags[tag] = 1
        } else {
          newTags[tag]++
        }
      }
    }
    console.log(newTags)
    setTags(newTags)
  }
  
  useEffect(() => {
    setNickname(userId.nickname)
    getMyPosts()
    getMySeries()
    getTags()
  }, [nickname])

  useEffect(() => {
    getTags()
  }, [posts])

  useEffect(() => {
    if (tags) {
      console.log()

    }
  }, [tags])
  
  
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

      {/* <TagHandlerDesktop /> */}
      <TagHandlerMobile
        dbService={dbService}
      />
      { tags &&
        Object.entries(tags).map((tag) => {
          console.log(tag)
          return <span> {tag[0]} ({tag[1]}) </span>
        }  )
      }

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
