import React, { useState, useRef } from "react"
import styles from "./mypage.module.scss";

import Txt from "../../components/Txt";
import Button from "../../components/Button";
import SeriesList from "./SeriesList"

import { dummyData } from "./dummy";

const Series = ( { data } ) => {

  return(
    <div className={styles.series}>

      <Button 
        txt="시리즈 삭제"
        className={styles.seriesDeleteBtn}
        onClick={() => console.log("시리즈 삭제 이벤트")}
      />

      <Txt
        className={styles.seriesTitle}
        txt={data.title}
      />
      
      <ul>
          {dummyData.map( (data, idx) => {
            return <SeriesList
                    data={data} 
                    key={idx} />
          })}
      </ul>

      <Button 
        txt="시리즈 전체보기"
        className={styles.seriesMoreviewBtn}
        onClick={() => console.log("시리즈 전체보기 이벤트")}
      />

    </div>
  )
}

export default Series;