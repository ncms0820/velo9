import React from "react";
import styles from "./_nav.module.scss";
const Nav = (props) => (
  <div className={styles.nav}>
    <div>
      <div className={styles.wrapper}>
        <input type="button" value={"트렌드"} />
        <input type="button" value={"최신"} />
        <select type="option">
          <option value="1">오늘</option>
          <option value="2">이번 주</option>
          <option value="3">이번 달</option>
          <option value="4">올해</option>
        </select>
      </div>
      <div>elipse</div>
    </div>
  </div>
);

export default Nav;
