import { useState, useEffect, useMemo } from "react";
import Button from "../../components/Button";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";
import { getMyPostsWithTagBtn } from "./mypageService";

const TagHandlerMobile = ( { dbService, tags, nickname, setSearchValue, setPosts} ) => {

  const onClickTag = async (e) => {
    const result = await dbService.memberMain(nickname, 0)
    const newPost = await getMyPostsWithTagBtn(result, e.target.name, setSearchValue)
    setPosts(newPost)
  }

  return(
    <div className={styles.tagHandlerBox}>
      <Button
        txt={`전체보기`} // (${posts.length}) 전체 글 길이를 알아야하는데, 따로 tags를 받아오지 않는이상 힘들듯하다.
        className={styles.tagBtn}
        onClick={(e) => onClickTag(e)}
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