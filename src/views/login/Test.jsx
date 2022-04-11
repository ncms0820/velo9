import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { pagination } from '../src/service/InfiniteScroll'
import Card from "../../components/card/card";
import InfiniteScroll from "../../service/InfiniteScroll";


// const testDb = new Array(100).fill(0).map( (v, i) => i+1).reverse(); // 간단 테스트용 array, 100~1까지

const Test = ( { dbService, authService }) => {

  // 유저정보 설정
  const testDb = dbService.getDb("new").content
  const navigate = useNavigate();
  const navigateState = useLocation().state; // firebase => 유저가 로그인되면 세션(비슷한거, 헤더정보)에 저장해줌.
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  // DB 받아오기 위한 설정값
  const [lastId, setLastId] = useState(0) // 가져온 id 저장
  const [posts, setPosts] = useState([])
  const size = 5; // 한번에 가져올 갯수

  // 무한스크롤 하기 위한 Ref
  
  const pagination = () => {
    const targetIdx = testDb.indexOf(lastId)
    const targetPost = testDb.slice(targetIdx, targetIdx + size)
    setPosts([...posts, ...targetPost])
    setLastId(lastId - size) // 반영이 안되네; 
  }

  useEffect(() => {
    let working = true;
    if (working) {
      authService.onAuthChange((user) => {
        if (user) {
          setUserId(user.uid); // 유저정보 저장
        } else {
          navigate("/") // 없으면 내쫒음
        }
      });
    }
    return () => {
      working = false;
    };
  }, [userId, authService, navigate]);
  
  const lastListRef = useRef(null); // 마지막 요소
  InfiniteScroll(lastListRef, posts, pagination)
  
  return (
    <>
    테스트페이지

    <button onClick={pagination}>테스트 버튼</button>

    { posts&&
      posts.map((v, i) => {
      return( <Card key={i} content={v} ref={ i === posts.length-1 ? lastListRef : null} />)
    })}
    </>
  )
}

export default Test;