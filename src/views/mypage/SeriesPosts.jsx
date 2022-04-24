import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./mypage.module.scss";

// Components
import Txt from "../../components/Txt";
// page
import Post from "./Post";


const SeriesPosts = ( { dbService } ) => {

  const { nickname, seriesName } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  
  const getMyPosts = async() => {
    const result = await dbService.getSeriesDetail(nickname, seriesName)
    console.log("시리즈 내용물", result.data.content)
    setPosts(result.data.content)
  }
  
  useEffect(() => {
    getMyPosts()
  }, [nickname])
  
  const GoReadPage = (post) => {
    console.log("클릭됨")
    navigate("/read", {
      state: { content: { member: { nickname: nickname }, postId: post.id } },
    });
  }


  return (
    <div className={styles.mypageBox}>
      <Txt
        txt={seriesName + "의 글"}
        className={styles.seriesPostTitle}
      />
      <div className={styles.mypageContent}>
        { posts.length &&
          posts.map( (post, idx) => {
          return <Post
                    key={idx}
                    dbService={dbService}
                    post={post}
                    onClick={ () => GoReadPage(post)}
                  />
          })
        }
      </div>
    </div>
  );
};

export default SeriesPosts;
