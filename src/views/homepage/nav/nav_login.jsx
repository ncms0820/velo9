import React, { useEffect, useRef, useState } from "react";
import styles from "./_nav_login.module.scss";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import ReactiveButton from "reactive-button";
const NavLogin = ({ handleTab }) => {
  const [toggle, setToggle] = useState(false);
  const formRef = useRef();
  // 검색 조건
  const inputRef = useRef();
  const [cheese, setCheese] = useState(false); // tag info
  const [sort, setSort] = useState();

  //meta INFO
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleCheeseChange = () => {
    setCheese(!cheese);
  };

  const onSearch = () => {
    const content = inputRef.current.value;
    handleTab(cheese, content, 0, sort);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
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
          <div>
            <div>
              <div className={styles.form_input}>
                <input ref={inputRef} onKeyPress={onKeyPress} type="text" />
                <ReactiveButton
                  style={{ borderRadius: "5px", width: "5rem" }}
                  color={"dark"}
                  idleText={"Search"}
                  onClick={onSearch}
                />
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
            <select name="abc" className={styles.form_select} onChange={(e) => setSort(e.currentTarget.value)}>
              <option value="createdDate">정렬 조건</option>
              <option value="createDate">최신순</option>
              <option value="old">오래된 순</option>
              <option value="viewCount">조회수</option>
              <option value="loveCount">좋아요 순</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavLogin;
