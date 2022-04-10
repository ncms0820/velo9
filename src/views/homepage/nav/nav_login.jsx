import React from "react";
import styles from "./_nav_login.module.scss";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavLogin = (props) => {
  return (
    <div className={styles.nav}>
      <div>
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>
    </div>
  );
};

export default NavLogin;
