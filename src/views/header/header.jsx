import React, { useEffect, useState } from "react";
import styles from "./_header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { memo } from "react/cjs/react.development";
import { Link, useNavigate } from "react-router-dom";
import ReactiveButton from "reactive-button";
import { Switch, useDarkreader } from "react-darkreader";
import Menu from "../../components/menu/menu";
const Header = memo(({ onLogout, authService, setUserId }) => {
  const [isDark, { toggle }] = useDarkreader(false);
  const [highlight, setHighlight] = useState(false);
  const navigate = useNavigate();
  const [tab, setTab] = useState(false);
  const goToSearch = () => {
    navigate("/explore");
  };
  function onMouseEnter() {
    setHighlight(true);
  }
  function onMouseLeave() {
    setHighlight(false);
  }
  const tabMenu = () => {
    setTab(!tab);
  };
  useEffect(() => {
    let working = true;
    if (working) {
      authService.onAuthChange((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId(null);
        }
      });
    }
    return () => {
      working = false;
    };
  }, [authService, setUserId]);
  return (
    <div className={styles.header}>
      <a href="/" className={styles.logo}>
        Velo9
      </a>
      <div className={onLogout ? styles.nav_log : styles.nav}>
        <div>
          <Switch checked={isDark} onChange={toggle} styling={"fluent"} onColor={"#080"} />
        </div>
        <div onClick={goToSearch}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={highlight && { color: "#FED000" }}
          />
        </div>
        {onLogout ? (
          <div>
            <div className={styles.loggedIn}>
              <div>
                <Link to={"/write"}>
                  <ReactiveButton style={{ borderRadius: "5px" }} color={"dark"} idleText={"새 글 작성"} />
                </Link>
              </div>
              <div>
                <ReactiveButton style={{ borderRadius: "5px" }} color={"violet"} idleText={"menu"} onClick={tabMenu} />
              </div>
            </div>
            {tab && <Menu onLogout={onLogout} />}
          </div>
        ) : (
          <Link to="/login">
            <ReactiveButton style={{ borderRadius: "5px" }} color={"dark"} idleText={"Login"} />
          </Link>
        )}
      </div>
    </div>
  );
});

export default Header;
