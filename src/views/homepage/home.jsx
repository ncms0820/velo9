import { React, useCallback, useEffect, useState } from "react";
import Card from "../../components/card/card";
import Header from "../header/header";
import styles from "./_home.module.scss";
import Nav from "./nav/nav";
import { useLocation, useNavigate } from "react-router-dom";
import NavLogin from "./nav/nav_login";
import Error from "../etc/error";
import Explore from "../explore/explore";

const Home = ({ dbService, authService }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState();
  const [userId, setUserId] = useState(navigateState && navigateState.id);
  const [search, setSearch] = useState("home");
  const goToSearch = () => {
    setSearch("search");
  };
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  const handleTab = useCallback(
    async (sort) => {
      let value = "";
      if (sort === true) {
        value = "old";
      } else if (sort === false) {
        value = "new";
      } else {
        return;
      }
      try {
        const db = await dbService.getDb(value);
        setCards(db);
      } catch {
        console.log("error");
      }
    },
    [dbService]
  );
  useEffect(() => {
    let working = true;
    if (working) {
      authService.onAuthChange((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          setUserId(null);
        }
        handleTab(true);
      });
    }
    return () => {
      working = false;
    };
  }, [userId, authService, navigate, handleTab]);
  return (
    <>
      <Header onLogout={userId && onLogout} goToSearch={goToSearch} />
      {search === "home" ? (
        <div>
          <div className={styles.container}>
            {userId ? <NavLogin /> : <Nav handleTab={handleTab} />}
            <section className={styles.grid_container}>
              {cards ? (
                cards.content.map((content, index) => <Card key={index} content={content} />)
              ) : (
                <Error title={" Loading"} />
              )}
            </section>
          </div>
        </div>
      ) : (
        <Explore />
      )}
    </>
  );
};

export default Home;

//cards.content.map((content, index) => <Card key={index} content={content} />
