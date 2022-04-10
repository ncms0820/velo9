import React from "react";
import styles from "./_nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react/cjs/react.development";
const Nav = ({ handleTab }) => {
  const [tabSwitch, setTabSwitch] = useState(true);
  const changeTab = (event) => {
    const current = event.currentTarget.id;
    if (current === "trend") {
      setTabSwitch(true);
    } else {
      setTabSwitch(false);
    }
  };
  useEffect(() => {
    let value = true;
    if (value) {
      console.log("here is nav");
      handleTab(tabSwitch);
    }
    return () => (value = false);
  }, [tabSwitch, handleTab]);

  return (
    <div className={styles.nav}>
      <div>
        <div className={styles.wrapper}>
          <button id="trend" className={tabSwitch ? "highlight" : "btn"} onClick={changeTab}>
            <FontAwesomeIcon icon={faArrowTrendUp} className={styles.fontAwesome} />
            <span>트랜딩</span>
          </button>
          <button id="newly" className={!tabSwitch ? "highlight" : "btn"} onClick={changeTab}>
            <FontAwesomeIcon icon={faClock} className={styles.fontAwesome} />
            <span>최신</span>
          </button>
        </div>
        <FontAwesomeIcon icon={faEllipsisV} size="lg" />
      </div>
    </div>
  );
};

export default Nav;
