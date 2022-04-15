import Txt from "../../components/Txt";
import styles from "./mypage.module.scss";

const TagHandlerDesktop = () => {

  return(
    <div className={styles.tagHandlerDesktopBox}>
    <div className={styles.tagHandlerDesktopBox}>
      <h4> 태그 목록</h4>
      <ul>
        <li>하드코딩된</li>
        <li>테스트</li>
        <li>데이터</li>
        <li>입니다.</li>
      </ul>
    </div>
    </div>
  )
}

export default TagHandlerDesktop;