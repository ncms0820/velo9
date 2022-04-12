import React, { useState, useRef } from "react"
import styles from "./mypage.module.scss";

import Txt from "../../components/Txt";
import Button from "../../components/Button";

const Post = (  {dummyData } ) => {

  return(
    <div className={styles.post}>
     {dummyData.imgUrl &&
      <img src={dummyData.imgUrl} alt="" />
     }
    <Txt
      className={styles.postTitle}
      txt={dummyData.title}
    />
    <Txt
      className={styles.postDesc}
      txt={dummyData.desc}
    />
    {dummyData.tags.length &&
      <div className={styles.tagBox}>
      {dummyData.tags.map( (val) => {
          return <Button 
                  onClick={() => console.log(val)}
                  txt={val}
                />
        })}
      </div>
     }
    <div>
      <Txt
        className={styles.postDate}
        txt={dummyData.date + " · "} // 날짜 계산식 적용
      />
      <Txt
        className={styles.postComments}
        txt={dummyData.comments.length + "개의 댓글"} // 날짜 계산식 적용
      />
    </div>
    </div>
  )
}

export default Post;