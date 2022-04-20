import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

import MypageHeader from "./MypageHeader";
import Post from "./Post";
import Series from "./Series";


// Components

// page


const MypageRouter = ( { userId, dbService, data, seriesName } ) => {

  console.log(data)
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(userId.nickname)
  const [seriesName, setSeriesName] = useState([]) // 시리즈 리스트, 따로 저장하거나 DB에서 받아오면 만들지 않아도됨.
  
  const [posts, setPosts] = useState([])
  
  
  const getMyPosts = async() => {
    const result = await dbService.getSeriesDetail(nickname, data)
    console.log("시리즈 내용물", result.data.content)
    setPosts(result.data.content)
  }
  
  useEffect(() => {
    setNickname(userId.nickname)
    getMyPosts()
  }, [nickname])
  

  return (
    <div className={styles.mypageBox}>

      <Txt
        txt={data}
      />

      <MypageHeader
        setTapState={setTapState}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className={styles.mypageContent}>

        {/* 포스트일때 */}
        { posts.length &&
          posts.map( (val, idx) => {
          return <Post
                    key={idx}
                    dummyData={val}
                  />
          })
        }

      </div>
    </div>
  );
};

export default MypageRouter;
