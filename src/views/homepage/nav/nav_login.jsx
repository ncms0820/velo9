import React, { useState } from "react";
import styles from "./_nav_login.module.scss";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import ReactiveButton from "reactive-button";
const NavLogin = (props) => {
  const [toggle, setToggle] = useState(false);
  const [cheese, setCheese] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleCheeseChange = () => {
    setCheese(!cheese);
  };
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.trigger} onClick={handleToggle}>
          <h1>상세 검색 조건</h1>
          <div className={toggle ? styles.rotate : undefined}>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </div>
        </div>
      </div>
      {toggle && (
        <div className={styles.toggle}>
          <form action="#">
            <div>
              <div className={styles.form_input}>
                <input type="text" />
                <ReactiveButton style={{ borderRadius: "5px", width: "5rem" }} color={"dark"} idleText={"Search"} />
              </div>
              <div className={styles.form_button}>
                <Toggle
                  id="cheese-status"
                  defaultChecked={cheese}
                  name="tagYes"
                  value="yes"
                  onChange={handleCheeseChange}
                />
                <h4>태그명으로 검색</h4>
              </div>
              <div className={styles.onOff}>on/off</div>
            </div>
            <select name="abc" id="" className={styles.form_select}>
              <option value="a">정렬 조건</option>
              <option value="a">최신순</option>
              <option value="a">오래된 순</option>
              <option value="a">조회수</option>
              <option value="a">좋아요 순</option>
            </select>
          </form>
        </div>
      )}
    </div>
  );
};

export default NavLogin;
