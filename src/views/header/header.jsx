import React from "react";
import styles from "./_header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = (props) => (
  <div className={styles.header}>
    <a href="/" className={styles.logo}>
      Velo9
    </a>

    <div className={`${styles.nav}`}>
      <div>
        <FontAwesomeIcon icon={faSun} />
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <Link to={"/login"}>
        <button>로그인</button>
      </Link>
    </div>
  </div>
);

export default Header;
