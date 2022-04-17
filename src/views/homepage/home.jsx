import { React, useCallback, useEffect, useState } from "react";
import Card from "../../components/card/card";
import styles from "./_home.module.scss";
import Nav from "./nav/nav";
import NavLogin from "./nav/nav_login";
import Error from "../etc/error";

const Home = ({ dbService, userId, onLoginModal }) => {
  const [cards, setCards] = useState();
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
    handleTab(true);

  }, [ handleTab]);
  return (
    <>
      {!onLoginModal && (
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
      )}
    </>
  );
};

export default Home;

//cards.content.map((content, index) => <Card key={index} content={content} />
