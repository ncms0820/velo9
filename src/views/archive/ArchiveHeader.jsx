import React, { useState, useRef, useEffect } from "react"
import styles from "./_archive.module.scss";

// Components
import Input from "../../components/Input";
import Txt from "../../components/Txt";


const ArchiveHeader = ( { setTapState, searchValue, setSearchValue } ) => {

  const likeTapBtnRef = useRef(null)
  const recentTapBtnRef = useRef(null)

  const tapChageCss = (activeRef, unactiveRef) => {
    activeRef.current.style.color = "#20c997"
    activeRef.current.style.borderBottom = "2px solid #20c997"
    unactiveRef.current.style.color = "black"
    unactiveRef.current.style.borderBottom = "none"
  }

  useEffect(() => {
    tapChageCss(likeTapBtnRef, recentTapBtnRef)
  }, [])
  

  const onClickTapBtn = (e) => {
    const type = e.target.innerText
    if (type === "좋아한 포스트") {
      setTapState("like")
      tapChageCss(likeTapBtnRef, recentTapBtnRef)
    } else if (type === "최근 읽은 포스트") {
      tapChageCss(recentTapBtnRef, likeTapBtnRef)
      setTapState("recent")
    }
  }


  return (
    <div className={styles.archiveHeader}>

      <div>
        <Txt
          txt="좋아한 포스트"
          ref={likeTapBtnRef}
          onClick={(e) => onClickTapBtn(e)}
        />
        <Txt
          txt="최근 읽은 포스트"
          ref={recentTapBtnRef}
          onClick={(e) => onClickTapBtn(e)}
        />
      </div>

      <Input
        className={styles.testInput}
        type="text"
        onChange={ (e) => setSearchValue(e.target.value) }
        value={searchValue}
      />
    </div>
  )

}

export default ArchiveHeader;