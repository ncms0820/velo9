import React from "react";
import styles from "./_header.module.scss";
const Header = (props) => (
  <div className={styles.header}>
    <h1>Velog</h1>
    <div className={`${styles.nav}`}>
      <span>sun</span>
      <span>search</span>
      <span>profile</span>
      <button>arrowD</button>
    </div>
  </div>
);

export default Header;
