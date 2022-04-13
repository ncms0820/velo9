import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

const SeriesList = ({ data }) => {


  return(
    <li className={styles.seriesListBox} >
      <img src={data.imgUrl ? data.imgUrl : "기본이미지"} alt="" />
      <Txt
        Txt={data.title}
      />
      <Txt
        Txt={data.desc}
      />
    </li>
  )

}

export default SeriesList;