import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./mypage.module.scss";

// page
import MypageHeader from "./MypageHeader";
import Series from "./SeriesPage/Series";
import { getMyPosts, getMySeries } from "./mypageService";
import MypageProfile from "./MypageProfile";

import PostPage from "./postPage/PostPage";

const MypageRouter = ({ dbService, functionService }) => {
  const location = useLocation();
  const { nickname } = useParams();

  const [tapState, setTapState] = useState("post"); // post, series, introduce는 보류
  const [searchValue, setSearchValue] = useState("");
  const [serieses, setSerieses] = useState([]);

  // db에서 받아온 series를 series state에 세팅
  const setSeriesContents = async() => {
    const result = await dbService.getSeries(nickname);
    const newSeries = getMySeries(result, searchValue);
    setSerieses(newSeries);
  }

  //로직을
  // 받아온다 - 필터링 - 추가 의 로직으로 가자 .
  

  /*검색어에 따른 posts filter조건*/
  useEffect(() => {
    console.log("실행됨")
    setSeriesContents();

  }, [searchValue, tapState]); // 탭이 왔다-갔다 할때만 바뀜
  // tap State가 바뀌면서 두번 추가된거지 지금. 


  useEffect(() => {
    setSearchValue("");
  }, [tapState]);

  return (
    <div className={styles.mypageBox}>
      
      <MypageProfile
        dbService={dbService}
        nickname={nickname}
        thumbnail={location.state?.thumbnail}
      />

      <MypageHeader
        setTapState={setTapState}
        tapState={tapState}
        setSearchValue={setSearchValue}
      />


      <div className={styles.mypageContent}>
        {/* 포스트일때 */}
        {tapState === "post" &&
          <PostPage 
            dbService={dbService}
            nickname={nickname}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          }

        {/* 시리즈일때 */}
        {tapState === "series" &&
          serieses.length !== 0 &&
          serieses.map((series, idx) => {
            return (
              <Series
                key={idx}
                series={series}
                nickname={nickname}
                dbService={dbService}
                functionService={functionService}
                searchValue={searchValue}
                setSerieses={setSerieses}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MypageRouter;
