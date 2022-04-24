import React from "react"
// import { useParams } from "react-router-dom";
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

const MypageProfile = ( {nickname, thumbnail, dbService } ) => {


  return(
    <>
      <div className={styles.profileBox}>
        { thumbnail
          ? <img src={dbService.encoderThumbnail(thumbnail)} alt="" />
          : <img src="/test_img.png" alt="" />
        }
          <div className={styles.infoBox}>
          <Txt 
            className={styles.infonickname}
            txt={nickname}
          />
        </div>
      </div>
    </>
  )
}

export default MypageProfile;