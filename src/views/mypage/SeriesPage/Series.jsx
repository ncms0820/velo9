import React, { useState, useRef, useEffect } from "react"
import styles from "../mypage.module.scss";

import Txt from "../../../components/Txt";
import Button from "../../../components/Button";
import SeriesContent from "./SeriesContent"

import { useNavigate } from "react-router-dom";
import { getMySeries, sweetAlert } from "../mypageService";

const Series = ( { series, nickname, dbService, functionService, searchValue, setSerieses } ) => {

  const navigate = useNavigate();
  const [seriesContents, setSeriesContents] = useState([])

  const getSeriesContents = async() => {
    const result = await dbService.getSeriesDetail(nickname, series.seriesName)
    setSeriesContents(result.data.content)
  }

  useEffect(() => {
    getSeriesContents()
  }, [])

  // 현재 에러남
  const onClickDeleteSeries = () => {
    sweetAlert(functionService, dbService, series.seriesId, nickname, searchValue, setSerieses);
  }

  const GoReadPage = (post) => {
    navigate("/read", {
      state: { content: { member: { nickname: nickname }, postId: post.id } },
    });
  }

  return(
    <div className={styles.series}>

      <Button 
        txt="시리즈 삭제"
        className={styles.seriesDeleteBtn}
        onClick={() => onClickDeleteSeries()}
      />

      <Txt
        className={styles.seriesTitle}
        txt={series.seriesName}
      />
      <ul>
        {
          seriesContents &&
          seriesContents.slice(seriesContents.length -3, seriesContents.length).map((post, idx) => {
            return <SeriesContent
                    key={idx}
                    dbService={dbService}
                    post={post}
                    onClick={() => GoReadPage(post)}
                  />
        })
        }
      </ul>
        {
          seriesContents.length !== 0 &&
          <Button 
            txt="시리즈 전체보기"
            className={styles.seriesMoreviewBtn}
            onClick={() => navigate(`/${nickname}/series/${series.seriesName}`) }
          />
        }

    </div>
  )
}

export default Series;