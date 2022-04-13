import { useState } from "react";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

import { dummyData } from "./dummy";

const SeriesList = ({ data }) => {

  console.log(data.title)

  return(
    <li className={styles.seriesListBox} >
      <img src={data.imgUrl ? data.imgUrl : "기본이미지"} alt="" />

      <div className={styles.seriesListTxtBox} >
        <Txt
          className={styles.seriesListTitle}
          txt={data.title}
        />
        <Txt
          className={styles.seriesListDesc}
          txt={data.desc}
        />
      </div>
    </li>
  )

}

export default SeriesList;