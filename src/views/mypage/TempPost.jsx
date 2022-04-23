import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./mypage.module.scss";

// Components
import Txt from "../../components/Txt";
// page
import Post from "./Post";


const TempPost = ( { userId, dbService } ) => {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([])
  
  const getMyPosts = async () => {
    const result = await dbService.getTemp()
    setPosts(result.data.data)
  }
  
  useEffect(() => {
    getMyPosts()
  }, [])
  
  const testGoReadPage = (post) => {
    console.log("클릭됨, 임시작성 -> 실제작성으로")
    navigate("/read", {
      state: { content: { member: { nickname: userId.nickname }, postId: post.id } },
    });
  }


  return (
    <div className={styles.mypageBox}>
      <Txt
        txt={"임시글 목록"}
        className={styles.seriesPostTitle}
      />
      <div className={styles.mypageContent}>
        { posts.length &&
          posts.map( (post, idx) => {
          return <TPost
                    key={idx}
                    post={post}
                    onClick={ (post) => testGoReadPage(post)}
                  />
          })
        }
      </div>
    </div>
  );
};

export default TempPost;

const TPost = ({post, onClick}) => {

  return(
    <div className={styles.post} onClick={onClick}>
      <Txt
        className={styles.postTitle}
        txt={post.title}
      />
      <Txt
        className={styles.postDate}
        txt={post.createdDate + " · "} // 날짜 계산식 적용
      />
    </div>

  )
}