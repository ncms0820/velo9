import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";


const SeriesContent = ({ dbService, post, onClick }) => {

  console.log( post.thumbnail)

  return(
    <li 
      className={styles.seriesContentBox}
      onClick={onClick} 
    >
      { post.thumbnail
        ? <img src={dbService.encoderThumbnail(post.thumbnail.fileName)} alt="" />
        : <img src="/test_img.png" alt="" />
      }
      

      <div className={styles.seriesContentTxtBox} >
        <Txt
          className={styles.seriesContentTitle}
          txt={post.title}
        />
        <Txt
          className={styles.seriesContentDesc}
          txt={post.introduce}
        />
      </div>
    </li>
  )

}

export default SeriesContent;