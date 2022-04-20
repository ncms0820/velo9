import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./mypage.module.scss";

// Components
import Txt from "../../components/Txt";
// page
import Post from "./Post";


const MypageRouter = ( { userId, dbService } ) => {

  const { username, seriesName } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  
  const getMyPosts = async() => {
    const result = await dbService.getSeriesDetail(username, seriesName)
    console.log("시리즈 내용물", result.data.content)
    setPosts(result.data.content)
  }
  
  useEffect(() => {
    getMyPosts()
  }, [username])
  

  return (
    <div className={styles.mypageBox}>
      <Txt
        txt={seriesName}
        className={styles.seriesPostTitle}
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
