import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { getMyPosts } from "../mypageService";

import Post from "../Post";


const PostPage = ({dbService, nickname, searchValue} ) => {
  
  const lastPostRef = useRef(null)
  const [posts, setPosts] = useState([]);
  const [nowPages, setNowPages] = useState(0);

  // db에서 받아온 post를 post state에 세팅
  const setPostContents = async() => {
    const result = await dbService.memberMain(nickname, nowPages);
    const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
    const nextPages = nowPages + 1 
    setNowPages(nextPages)
    console.log(result)
    console.log(posts, newPost)
    setPosts([...posts, ...newPost]); // 만약 이전포스트가 있다면 이전포스트에 추가하는 형태로 하면되는데... 
  }

  useEffect(() => {
    setPostContents()
  }, [])
  

  const GoReadPage = (post) => {
    Navigate("/read", {
      state: { content: { member: { nickname: nickname }, postId: post.id } },
    });
  };

  const test = posts.map((post, idx, arr) => {
    return <Post 
              key={idx}
              ref={idx === arr.length - 1 ? lastPostRef : null} // 마지막 항목일때만 추가
              dbService={dbService} 
              post={post} 
              onClick={() => GoReadPage(post)} 
            />
  })


  return(
    <>
    {posts && test}
    </>
  )
}

export default PostPage;