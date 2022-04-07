import React from "react";
import styles from "./_nav.module.scss";
const Nav = (props) => (
  <div className={styles.nav}>
    <div>
      <div>
        <button>트렌딩</button>
        <button>최신</button>
        <select type="option" value={"hi"}>
          <option value="hi">hi</option>
        </select>
      </div>
      <div>elipse</div>
    </div>
  </div>
);

export default Nav;
