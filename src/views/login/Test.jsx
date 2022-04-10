import React, { useState, useEffect } from "react";
// import { pagination } from '../src/service/InfiniteScroll'

const testData = new Array(100).fill(0).map( (v, i) => i+1).reverse(); // 간단 테스트용 array, 100~1까지

const Test = () => {

  const [lastId, setLastId] = useState(testData.length) // 가져온 id 저장
  const [posts, setPosts] = useState([])
  const size = 5; // 한번에 가져올 갯수

  const pagination = () => {
    const targetIdx = testData.indexOf(lastId)
    const targetPost = testData.slice(targetIdx, targetIdx + size)
    setPosts([...posts, ...targetPost])
    setLastId(lastId - size) // 반영이 안되네; 
  }
  
console.log(posts, typeof posts)
  return (
    <>
    테스트페이지

    <button onClick={pagination}>테스트 버튼</button>

    { posts&&
      posts.map(v => {
      return(<div style={{height: "300px", background: 'skyblue'}}> 깡통 </div>)
    })}
    </>
  )
}

export default Test;