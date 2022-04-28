import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyPosts, getMyPostsWithTagBtn } from "../mypageService";

import Post from "./Post";
import TagHandlerMobile from "./TagHandlerMobile";


const PostPage = ({dbService, nickname, searchValue, setSearchValue} ) => {

  const navigate = useNavigate();
  const lastPostRef = useRef(null);

  const [posts, setPosts] = useState([]);
  const [nowPages, setNowPages] = useState(0);
  const [tags, setTags] = useState(null);

  const [selectedTag, setSelectedTag] = useState(null);
  
  /* db에서 받아온 post를 post state에 세팅 */
  const setPostContents = async(nowPages) => {
    if (selectedTag) {
     const result = await dbService.memberMain(nickname, 0)
     const newPost = await getMyPostsWithTagBtn(result, selectedTag)
     setSearchValue("")
     setNowPages(0)
     console.log(newPost)
     setPosts(newPost)
   } 
   else if (searchValue) { /* 수정해야함...*/
      const result = await dbService.memberMain(nickname, nowPages);
      const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
      console.log(newPost)
      setPosts(newPost); // 만약 이전포스트가 있다면 이전포스트에 추가하는 형태로 하면되는데... 
    } 
  else if (!selectedTag && !searchValue) {
    const result = await dbService.memberMain(nickname, nowPages);
    const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
    console.log(newPost)
    setPosts([...posts, ...newPost]); 
  }

  }

  /* 태그 목록 가져오기*/ 
  const getTags = async() => {
    const result = await dbService.memberMain(nickname, 0);
    setTags(result.data.subData)
  }

  /* 초기 세팅 */ 
  useEffect(() => {
    // setPostContents(nowPages)
    getTags()
  }, [])

  // useEffect(() => {
  //   console.log(selectedTag)
  //   setPostContents(nowPages)
  // }, [selectedTag, searchValue, nowPages])

const t1 = async() => {
  const result = await dbService.memberMain(nickname, 0)
  const newPost = await getMyPostsWithTagBtn(result, selectedTag)
  setSearchValue("")
  setNowPages(0)
  console.log(newPost)
  setPosts(newPost)
}

const t2 = async() => {
  const result = await dbService.memberMain(nickname, 0);
  const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
  console.log(newPost)
  setNowPages(0)
  setPosts(newPost);
  return
}
const t3 = async() => {
  const result = await dbService.memberMain(nickname, nowPages);
  const newPost = getMyPosts(result, searchValue); //이게 필터링해서 포스트 받아오는 함수
  setPosts([...posts, ...newPost]); // 만약 이전포스트가 있다면 이전포스트에 추가하는 형태로 하면되는데... 
  // const nextPages = nowPages + 1 
  // setNowPages(nextPages)
}


  useEffect(() => {
    if (selectedTag) {
      t1()
    }
  }, [selectedTag])
  useEffect(() => {
    if (searchValue) {
      t2()
    }
  }, [searchValue])
  useEffect(() => {
    console.log(posts)
    t3()
  }, [nowPages])
  
  
  
  /* read page 이동*/ 
  const GoReadPage = (post) => {
    navigate("/read", {
      state: { content: { member: { nickname: nickname }, postId: post.id } },
    });
  };

  useEffect(() => {
    console.log("불러올 페이지:", nowPages)
  }, [nowPages])
  

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
        const nextPages = nowPages + 1 
        setNowPages(nextPages)
        // // await setPostContents(nextPages) // 데이터 불러오기
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