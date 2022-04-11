import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { pagination } from '../src/service/InfiniteScroll'
import Card from "../../components/card/card";


// const testDb = new Array(100).fill(0).map( (v, i) => i+1).reverse(); // 간단 테스트용 array, 100~1까지

const Test = ( { dbService, authService }) => {

  const testDb = dbService.getDb("new").content
  const navigate = useNavigate();
  const navigateState = useLocation().state; // firebase => 유저가 로그인되면 세션(비슷한거, 헤더정보)에 저장해줌.
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const [lastId, setLastId] = useState(0) // 가져온 id 저장
  const [posts, setPosts] = useState([])
  const size = 5; // 한번에 가져올 갯수
  
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
  
  
  return (
    <>
    테스트페이지

    <button onClick={() => pagination()}></button>
    {posts.map(v => {
      return(<div> {v} </div>)
    })}
    </>
  )
}

export default Test;