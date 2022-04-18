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
    async (sort = "createdDate") => {
      try {
        const db = await dbService.getDb(undefined, undefined, undefined, sort);
        if (db.content.length !== 0) {
          setCards(db.data.content);
        } else {
          //임시 입니다.
          setCards(fakeDb);
        }
      } catch {
        console.log("error");
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
            {userId ? <NavLogin /> : <Nav handleTab={handleTab} />}
            <section className={styles.grid_container}>
              {cards ? (
                cards.content.map((content) => <Card key={content.postId} content={content} />)
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
