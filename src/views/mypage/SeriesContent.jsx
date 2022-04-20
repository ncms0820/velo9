import { useState } from "react";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

import { dummyData } from "./dummy";

const SeriesContent = ({ data }) => {

  return(
    <li className={styles.SeriesContentBox} >
      <img src={data.imgUrl ? data.imgUrl : "test_img.png"} alt="" />

      <div className={styles.SeriesContentTxtBox} >
        <Txt
          className={styles.SeriesContentTitle}
          txt={data.title}
        />
        <Txt
          className={styles.SeriesContentDesc}
          txt={data.introduce}
        />
      </div>
    </li>
  )

}

export default SeriesContent;