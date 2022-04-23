import React, { useState, useRef, useEffect } from "react"
import styles from "./mypage.module.scss";

import { tapChageCss } from "./mypageService"
// Components
import Input from "../../components/Input";
import Txt from "../../components/Txt";



const MypageHeader = ( { setTapState, setSearchValue, tapState } ) => {

  const postTapBtnRef = useRef(null)
  const seriesTapBtnRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    tapChageCss(postTapBtnRef, seriesTapBtnRef)
  }, [])
  
  const onClickTapBtn = (e) => {
    const type = e.target.innerText
    if (type === "글") {
      tapChageCss(postTapBtnRef, seriesTapBtnRef)
      setTapState("post")
    } else if (type === "시리즈") {
      tapChageCss(seriesTapBtnRef, postTapBtnRef)
      setTapState("series")
    }
  }

  useEffect(()=>{
    let timer = setTimeout(()=>{ 
      setSearchValue(inputValue)
     }, 500);
    return ()=>{ clearTimeout(timer) }
  }, [inputValue]);



  return (
    <div className={styles.mypageHeader}>
      <Input
        className={styles.testInput}
        type="text"
        onChange={ (e) => setInputValue(e.target.value) }
        value={inputValue}
        placeholder={tapState === "post" ? "제목, 소개, 태그로 검색하세요" : "시리즈 명으로 검색하세요"}
      />

      <div>
        <Txt
          txt="글"
          ref={postTapBtnRef}
          onClick={(e) => onClickTapBtn(e)}
        />
        <Txt
          txt="시리즈"
          ref={seriesTapBtnRef}
          onClick={(e) => onClickTapBtn(e)}
        />
      </div>
    </div>
  )

}

export default MypageHeader;