import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPosts, getMyPostsWithTagBtn } from "../mypageService";

import Post from "./Post";
import TagHandlerMobile from "./TagHandlerMobile";
// import { unstable_batchedUpdates } from "react-dom";


const PostPage = ({dbService, nickname, searchValue, setSearchValue} ) => {

  const navigate = useNavigate();
  const lastPostRef = useRef(null);

  const [posts, setPosts] = useState([]);
  const [nowPages, setNowPages] = useState(1);
  const [tags, setTags] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  
  /* read page 이동*/ 
  const GoReadPage = (post) => {
    navigate("/read", {
      state: { content: { member: { nickname: nickname }, postId: post.id } },
    });
  };

  /* 태그 목록 가져오기*/ 
  const getTags = async() => {
    const result = await dbService.memberMain(nickname, 0);
    setTags(result.data.subData)
  }
  /* 초기 세팅 */ 
  useEffect(() => {
    getTags()
  }, [])

//  unstable_batchedUpdates 사용예정.

// 태그 클릭
const getPostsWithTag = async() => {
  const result = await dbService.memberMain(nickname, 0)
  const newPost = await getMyPostsWithTagBtn(result, selectedTag)
  setSearchValue("")
  setPosts(newPost)
}
const changePostsWithTag = async() => {
  const result = await dbService.memberMain(nickname, nowPages)
  const newPost = await getMyPostsWithTagBtn(result, selectedTag)
  setSearchValue("")
  setNowPages(nowPages + 1)
  setPosts([...posts, ...newPost]);
}


// 검색어 입력
const getPostWithSearch = async() => {
  const result = await dbService.memberMain(nickname, 0);
  const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
  setSelectedTag(null);
  setPosts(newPost);
}
const changePostsWithSearch = async() => {
  const result = await dbService.memberMain(nickname, nowPages);
  const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
  setSelectedTag(null);
  setNowPages(nowPages + 1);
  setPosts([...posts, ...newPost]);
}


// 그냥
const getPosts = async() => {
  const result = await dbService.memberMain(nickname, 0);
  const newPost = result.data.data.content; //이게 필터링해서 포스트 받아오는 함수
  setPosts(newPost); // 만약 이전포스트가 있다면 이전포스트에 추가하는 형태로 하면되는데... 
}
const changePosts = async () => {
  const result = await dbService.memberMain(nickname, nowPages);
  const newPost = result.data.data.content; //이게 필터링해서 포스트 받아오는 함수
  if (!newPost.length) return
  setNowPages(nowPages + 1);
  setPosts([...posts, ...newPost]);
}
  

// tag, search, 일반 상태가 바뀌었을 때 초기 세팅. 상태에 따라 post를 불러오는 방식이 달라진다.
useEffect(() => {
  if (searchValue) {
    getPostWithSearch();
  } else if (selectedTag) {
    getPostsWithTag();
  } else {
    getPosts();
  }
  setNowPages(1)
}, [searchValue, selectedTag])


const observeChange = () => {
  if (searchValue) {
    changePostsWithSearch();
  } else if (selectedTag) {
    changePostsWithTag();
  } else {
    changePosts();
  }
}
  

  /* 무한스크롤 구현 */ 
  const observerRef = useRef();
  const opt = {
    // root: document.querySelector("#scrollArea"), // 겹칠 요소. 설정하지 않으면 브라우저 뷰포트가 기본값.
    rootMargin: "0px",
    threshold: 1.0,
  }
  const checkIntersect = (entries, observer) => { // 객체목록과 관찰자를 파라메터로 받는다.
    entries.forEach( async (entry) => {
      if (entry.isIntersecting) { // isIntersecting 은 t/f로 반환됨. 교차되면 true
        observeChange(); // 실행할 함수
      }
    });
  }
  useEffect(() => {
    if (lastPostRef.current) {
      // isLoading true
      observerRef.current = new IntersectionObserver(checkIntersect, opt); // observe 할 요소를 current로 지정,
      lastPostRef.current && observerRef.current.observe(lastPostRef.current);
    // isLoading false
    }
    return () => observerRef.current && observerRef.current.disconnect(); // observerRef.current.unobserve()와 동일
  }, [posts]); // datas가 변경되면 observer를 새로 지정



  return(
    <>
      {
        <TagHandlerMobile
          dbService={dbService}
          tags={tags}
          nickname={nickname}
          setSearchValue={setSearchValue}
          setPosts={setPosts}
          nowPages={nowPages}
          setNowPages={setNowPages}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      }
      {posts && 
        posts.map((post, idx, arr) => {
            return <Post 
                  key={idx}
                  ref={idx === arr.length - 1 ? lastPostRef : null} // 마지막 항목일때만 추가
                  dbService={dbService} 
                  post={post} 
                  onClick={() => GoReadPage(post)} 
                />
        })
      }
    </>
  )
}

export default PostPage;