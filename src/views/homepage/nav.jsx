import React from "react";
import styles from "./_nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <div>
        <div className={styles.wrapper}>
          <button>
            <FontAwesomeIcon icon={faArrowTrendUp} className={styles.fontAwesome} />
            <span>트랜딩</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faClock} className={styles.fontAwesome} />
            <span>최신</span>
          </button>
          <select type="option">
            <option value="1">오늘</option>
            <option value="2">이번 주</option>
            <option value="3">이번 달</option>
            <option value="4">올해</option>
          </select>
        </div>
        <FontAwesomeIcon icon={faEllipsisV} size="lg" />
      </div>
    </div>
  );
};

export default Nav;
