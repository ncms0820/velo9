import react, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./mypage.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import MypageHeader from "./MypageHeader";
import Post from "./Post";
import { dummyData } from "./dummy";
import Series from "./Series";

// Components

// page


const MypageRouter = ( { userId } ) => {
  const navigate = useNavigate();

  const [tapState, setTapState] = useState('post') // post, series, introduce는 보류
  const [searchValue, setSearchValue] = useState('')
  const [tags, setTags] = useState([]) //태그 목록 따로 저장

  useEffect(() => {
    console.log("검색창 내용이 바뀔때마다 실행됨")
  }, [searchValue])
  

  return (
    <div className={styles.mypageBox}>
      <MypageHeader
        setTapState={setTapState}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      { tapState === "post" &&
        dummyData.map( (val, idx) => {
        return <Post
                 key={idx}
                 dummyData={val}
                />
        })
      }

      { tapState === "series" &&
        dummyData.map( (val, idx) => {
        return <Series
                 key={idx}
                 data={val}
                />
        })
      }
    </div>
  );
};

export default MypageRouter;
