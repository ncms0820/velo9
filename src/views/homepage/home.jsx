import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import fakeDb from "../../service/db";
import Header from "../header/header";
import styles from "./home.module.scss";
import Nav from "./nav";

const Home = (props) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({ fakeDb });
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <section className={styles.grid_container}>
        {cards.fakeDb.content.map((content, index) => (
          <Card key={index} content={content} />
        ))}
      </section>
    </div>
  );
};

export default Home;
