import { useState } from "react";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

import { dummyData } from "./dummy";

const SeriesContent = ({ data, onClick }) => {

  return(
    <li 
      className={styles.seriesContentBox}
      onClick={onClick} 
    >
      <img src={data.imgUrl ? data.imgUrl : "test_img.png"} alt="" />

      <div className={styles.seriesContentTxtBox} >
        <Txt
          className={styles.seriesContentTitle}
          txt={data.title}
        />
        <Txt
          className={styles.seriesContentDesc}
          txt={data.introduce}
        />
      </div>
    </li>
  )

}

export default SeriesContent;