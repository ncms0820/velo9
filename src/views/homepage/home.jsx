import { React, useState } from "react";
import Card from "../../components/card/card";
import Header from "../header/header";
import styles from "./_home.module.scss";
import Nav from "./nav";

const Home = ({ dbService }) => {
  const [cards, setCards] = useState();
  const handleTab = (sort) => {
    let value = "";
    if (sort === true) {
      value = "old";
    } else {
      value = "new";
    }
    const db = dbService.getDb(value);
    setCards(db);
  };
  return (
    <div className={styles.container}>
      <Header />
      <Nav handleTab={handleTab} />
      <section className={styles.grid_container}>
        {cards && cards.content.map((content, index) => <Card key={index} content={content} />)}
      </section>
    </div>
  );
};

export default Home;

//cards.content.map((content, index) => <Card key={index} content={content} />
