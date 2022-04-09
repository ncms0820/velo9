import React from "react";
import styles from "./_header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react/cjs/react.development";
import { Link } from "react-router-dom";
const Header = memo(({ onLogout }) => {
  return (
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
        {onLogout ? (
          <button onClick={onLogout}>로그아웃</button>
        ) : (
          <Link to="/login">
            <button>로그인</button>
          </Link>
        )}
      </div>
    </div>
  );
});

export default Header;
