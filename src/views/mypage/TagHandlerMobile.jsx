import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

const TagHandlerMobile = ( {posts} ) => {

  const [tags, setTags] = useState() //태그 목록 따로 저장, object Array

  const getTags = () => {
    const newTags = new Object();
    if (!posts.length) return
    for (let post of posts) {
      for(let tag of post.tags) {
        if (!newTags.hasOwnProperty(tag)) {
          newTags[tag] = 1
        } else {
          newTags[tag]++
        }
      }
    }
    setTags(newTags)
  }

  useEffect(() => {
    console.log(tags)
    getTags()
  }, [posts])

  return(
    <div className={styles.tagBox}>
      <Button
        txt={`전체보기 (${posts.length})`}
        className={styles.tagBtn}
      />
      { tags &&
        Object.entries(tags).map((tag) => {
          return <Button
                  txt={`${tag[0]} (${tag[1]})`}
                  className={styles.tagBtn}
                  />
        }  )
      }
  </div>
  )
}

export default TagHandlerMobile;