import { useState, useEffect, useMemo } from "react";
import Button from "../../components/Button";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

const TagHandlerMobile = ( {setSearchValue, tags} ) => {

  const onClickTag = (e) => {
    setSearchValue(e.target.name)
  }

  return(
    <div className={styles.tagHandlerBox}>
      <Button
        txt={`전체보기`} // (${posts.length}) 전체 글 길이를 알아야하는데, 따로 tags를 받아오지 않는이상 힘들듯하다.
        className={styles.tagBtn}
        onClick={() => setSearchValue("")}
      />
      { tags &&
        Object.entries(tags).map((tag) => {
          return <Button
                  key={tag[0]}
                  txt={`${tag[0]} (${tag[1]})`}
                  className={styles.tagBtn}
                  name={tag[0]}
                  onClick={ (e) => onClickTag(e)}
                  />
        }  )
      }
  </div>
  )
}

export default TagHandlerMobile;