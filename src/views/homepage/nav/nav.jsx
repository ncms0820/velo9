import React from "react";
import styles from "./_nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faArrowTrendUp, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react/cjs/react.development";
import { Planet } from "react-planet";
const Nav = ({ handleTab }) => {
  const [tabSwitch, setTabSwitch] = useState("createdDate");
  const changeTab = (event) => {
    const current = event.currentTarget.id;
    if (current === "createdDate") {
      setTabSwitch("createdDate");
    } else {
      setTabSwitch("old");
    }
  };
  useEffect(() => {
    let value = true;
    if (value) {
      handleTab(undefined, undefined, undefined, tabSwitch);
    }
    return () => (value = false);
  }, [tabSwitch, handleTab]);

  return (
    <div className={styles.nav}>
      <div>
        <div className={styles.wrapper}>
          <button id="createdDate" className={tabSwitch === "createdDate" ? "highlight" : "btn"} onClick={changeTab}>
            <FontAwesomeIcon icon={faArrowTrendUp} className={styles.fontAwesome} />
            <span>트랜딩</span>
          </button>
          <button id="old" className={tabSwitch === "old" ? "highlight" : "btn"} onClick={changeTab}>
            <FontAwesomeIcon icon={faClock} className={styles.fontAwesome} />
            <span>최신</span>
          </button>
        </div>
        <Planet
          centerContent={<FontAwesomeIcon icon={faEllipsisV} size="lg" />}
          hideOrbit
          autoClose
          orbitRadius={50}
          bounceOnClose
          rotation={30}
          bounceDirection="BOTTOM"
        >
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
          <div />
          <div />
          <div />
          <div />
        </Planet>
      </div>
    </div>
  );
};

export default Nav;
