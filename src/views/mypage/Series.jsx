import React, { useState, useRef, useEffect } from "react"
import styles from "./mypage.module.scss";

import Txt from "../../components/Txt";
import Button from "../../components/Button";
import SeriesContent from "./SeriesContent"

import { dummyData } from "./dummy";
import { useNavigate } from "react-router-dom";

const Series = ( { data, nickname, dbService } ) => {

  const navigate = useNavigate();
  const [seriesContents, setSeriesContents] = useState([])

  const getSeriesContents = async() => {
    const result = await dbService.getSeriesDetail(nickname, data)
    console.log("시리즈 내용물", result.data.content)
    setSeriesContents(result.data.content)
  }

  useEffect(() => {
    getSeriesContents()
  }, [])
  

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
        {
          seriesContents &&
          seriesContents.slice(seriesContents.length -3, seriesContents.length).map((data, idx) => {
          return <SeriesContent
                    data={data} 
                  />
        })
        }
      </ul>

        {
          seriesContents.length !== 0 &&
          <Button 
            txt="시리즈 전체보기"
            className={styles.seriesMoreviewBtn}
            onClick={() => navigate(`/${nickname}/series/${data}`) }
          />
        }

    </div>
  )
}

export default Series;