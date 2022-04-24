import React from "react"
// import { useParams } from "react-router-dom";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

const MypageProfile = ( {nickname, userId, dbService } ) => {

  // const { nickname } =  useParams();

  // console.log(nickname)

  return(
    <>
    { userId &&
      <div className={styles.profileBox}>
        {/* { userId.thumbnail
          ? <img src={dbService.encoderThumbnail(userId.thumbnail.fileName)} alt="" />
          : <img src="/test_img.png" alt="" />
        } */}
          <img src="/test_img.png" alt="" />  {/* 임시값  */}
          <div className={styles.infoBox}>
          <Txt 
            className={styles.infonickname}
            txt={nickname}
          />
          {/* <Txt 
            className={styles.infoBlogTitle}
            txt={userId.blogTitle}
          /> */}
        </div>
      </div>
    }
  </>
  )
}

export default MypageProfile;