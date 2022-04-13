import React, { useState, useRef, useEffect } from "react"
import styles from "./mypage.module.scss";

// Components
import Input from "../../components/Input";
import Txt from "../../components/Txt";



const MypageHeader = ( { setTapState, searchValue, setSearchValue } ) => {

  const postTapBtnRef = useRef(null)
  const seriesTapBtnRef = useRef(null)

  useEffect(() => {
    tapChageCss(postTapBtnRef, seriesTapBtnRef)
  }, [])
  

  const tapChageCss = (activeRef, unactiveRef) => {
    activeRef.current.style.color = "#20c997"
    activeRef.current.style.borderBottom = "2px solid #20c997"
    unactiveRef.current.style.color = "black"
    unactiveRef.current.style.borderBottom = "none"
  }

  const onClickTapBtn = (e) => {
    const type = e.target.innerText
    if (type === "글") {
      setTapState("post")
      tapChageCss(postTapBtnRef, seriesTapBtnRef)
    } else if (type === "시리즈") {
      tapChageCss(seriesTapBtnRef, postTapBtnRef)
      setTapState("series")
    }
  }


  return (
    <div className={styles.mypageHeader}>
      <Input
        className={styles.testInput}
        type="text"
        onChange={ (e) => setSearchValue(e.target.value) }
        value={searchValue}
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