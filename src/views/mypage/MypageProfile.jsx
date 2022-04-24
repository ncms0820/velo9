import React from "react"
import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

const MypageProfile = ( { userId, dbService } ) => {

  


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
            txt={userId.nickname}
          />
          <Txt 
            className={styles.infoBlogTitle}
            txt={userId.blogTitle}
          />
        </div>
      </div>
    }
  </>
  )
}

export default MypageProfile;