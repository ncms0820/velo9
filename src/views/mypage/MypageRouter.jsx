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
  const [tags, setTags] = useState([]) //태그 목록 따로 저장
  const [seriesName, setSeriesName] = useState([]) // 시리즈 리스트, 따로 저장하거나 DB에서 받아오면 만들지 않아도됨.
  
  const [posts, setPosts] = useState([])


  useEffect(() => {
    // let reverse = dummyData.reverse() // 최근 hash 값부터 위로
    let series = dummyData.map( (v) => v.series )
    let value = series.filter( (v, i) => series.indexOf(v) === i ) // 중복값 제거
    console.log(value)
    setSeriesName(value)
  }, [])
  
  const test = async () => {
    const result = await dbService.memberMain(nickname, 0)
    console.log(result.data.data.content)
    setPosts(result.data.data.content)
  }
  
  useEffect(() => {
    test()
  }, [])
  

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

      <div className={styles.mypageContent}>

        {/* 포스트일때 */}
        { tapState === "post" && posts.length &&
          posts.map( (val, idx) => {
          return <Post
                  key={idx}
                  dummyData={val}
                  />
          })
        }
        {/* 시리즈일때 */}
        { tapState === "series" &&
          seriesName.map( (data, idx) => {
          return <Series
                  key={idx}
                  data={data}
                  />
          })
        }

      </div>
    </div>
  );
};

export default MypageRouter;
