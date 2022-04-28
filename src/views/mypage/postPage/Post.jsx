import React, { useState, useRef, forwardRef } from "react"
import styles from "../mypage.module.scss";

import Txt from "../../../components/Txt";
import Button from "../../../components/Button";

const Post = forwardRef( ( { dbService, post, onClick }, ref ) => {

  console.log(post)
  
  return(
    <div className={styles.post} onClick={onClick} ref={ref}>
      {post.thumbnail &&
        <img src={  dbService.encoderThumbnail(post.thumbnail.fileName)} alt="" />
      }
      <Txt
        className={styles.postTitle}
        txt={post.title}
      />
      <Txt
        className={styles.postIntro}
        txt={post.introduce}
      />

      { post.tags.length &&
        <div className={styles.tagBox}>
          {post.tags.map( (val) => {
              return <Button 
                      txt={val}
                      className={styles.tagBtn}
                      onClick={() => console.log(val)}
                    />
            })}
        </div>
      }
      <div>
        <Txt
          className={styles.postDate}
          txt={post.createdDate} // 날짜 계산식 적용
        />
        {/* <Txt
          className={styles.postComments}
          txt={post.comments.length + "개의 댓글"} // 댓글은 따로 불러오나??
        /> */}
      </div>
    </div>
  )
})

export default Post;