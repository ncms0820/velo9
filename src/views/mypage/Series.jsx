import React, { useState, useRef, useEffect } from "react"
import styles from "./mypage.module.scss";

import Txt from "../../components/Txt";
import Button from "../../components/Button";
import SeriesList from "./SeriesList"

import { dummyData } from "./dummy";

const Series = ( { data } ) => {

  const targetSeries = dummyData.filter((val, idx) => data === val.series );
  // data => series 이름. 이거랑 같은 dummy를 뽑으면 된다.
  console.log(data)
  console.log(targetSeries)

  console.log(data)

  return(
    <div className={styles.series}>

      <Button 
        txt="시리즈 삭제"
        className={styles.seriesDeleteBtn}
        onClick={() => console.log("시리즈 삭제 이벤트")}
      />

      <Txt
        className={styles.seriesTitle}
        txt={data}
      />
      
      <ul>
        { //시리즈 이름이 같은것끼리 매핑.
          targetSeries.map((data, idx) => {
          return <SeriesList
                    data={data} 
                  />
        })
        }
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