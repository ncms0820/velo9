import { useState } from "react";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

import { dummyData } from "./dummy";

const SeriesContent = ({ post, onClick }) => {

  return(
    <li 
      className={styles.seriesContentBox}
      onClick={onClick} 
    >
      <img src={post.imgUrl ? post.imgUrl : "test_img.png"} alt="" />

      <div className={styles.seriesContentTxtBox} >
        <Txt
          className={styles.seriesContentTitle}
          txt={post.title}
        />
        <Txt
          className={styles.seriesContentDesc}
          txt={post.introduce}
        />
      </div>
    </li>
  )

}

export default SeriesContent;