import { React, useCallback, useEffect, useState } from "react";
import Card from "../../components/card/card";
import styles from "./_home.module.scss";
import Nav from "./nav/nav";
import NavLogin from "./nav/nav_login";
import Error from "../etc/error";
import fakeDb from "../../service/fakeDb";

const Home = ({ dbService, userId, onLoginModal }) => {
  const [cards, setCards] = useState();
  const handleTab = useCallback(
    async (tag = undefined, content = undefined, page = undefined, sort = "createdDate") => {
      try {
        const db = await dbService.getDb(tag, content, page, sort);
        if (db.content.length !== 0) {
          console.log(db.content);
          setCards(db);
        } else {
          setCards();
        }
      } catch (err) {
        console.log(err);
      }
    },
    [dbService]
  );

  useEffect(() => {
    handleTab();
  }, [handleTab]);

  return (
    <>
      {!onLoginModal && (
        <div>
          <div className={styles.container}>
            {userId ? <NavLogin handleTab={handleTab} /> : <Nav handleTab={handleTab} />}
            <section className={styles.grid_container}>
              {cards ? (
                cards.content.map((content) => <Card key={content.postId} content={content} />)
              ) : (
                <Error title={" No data found"} />
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
