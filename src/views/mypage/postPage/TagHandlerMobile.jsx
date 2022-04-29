import { useState, useEffect, useMemo } from "react";
import Button from "../../../components/Button";
import Txt from "../../../components/Txt";
import styles from "../mypage.module.scss";
import { getMyPostsWithTagBtn } from "../mypageService";

const TagHandlerMobile = ( { dbService, tags, nickname, setSearchValue, setPosts, setNowPages, selectedTag, setSelectedTag} ) => {

  /* 새 태그 클릭. 각 새 태그 클릭시, po */ 
  const onClickTag = async (e, page) => {
    console.log(e.target.name)
    const result = await dbService.memberMain(nickname, page)
    const newPost = await getMyPostsWithTagBtn(result, e.target.name, setSearchValue)
    setNowPages(0)
    console.log(newPost)
    if (newPost.length) { // 없으면 재귀실행
      onClickTag(e, page+1)
    }
    setPosts(newPost)
    
  }


useEffect(() => {
  console.log(selectedTag)
}, [selectedTag])

const t1 = () => {
  setSelectedTag(null)
  setSearchValue("")
}


  return(
    <div className={styles.tagHandlerBox}>
      <Button
        txt={`전체보기`} // (${posts.length}) 전체 글 길이를 알아야하는데, 따로 tags를 받아오지 않는이상 힘들듯하다.
        className={styles.tagBtn}
        onClick={() => t1()}
      />
      { tags &&
        tags.map((tag) => {
          return <Button
                  key={tag.tagId}
                  txt={tag.tagName}
                  className={styles.tagBtn}
                  name={tag.tagName}
                  onClick={ (e) => setSelectedTag(e.target.name)}
                  />
        }  )
      }
  </div>
  )
}

export default TagHandlerMobile;