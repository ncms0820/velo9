import React from "react";
import { useState } from "react/cjs/react.production.min";
import Card from "../../components/card/card";
import Header from "../header/header";
import styles from "./home.module.scss";
import Nav from "./nav";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Nav />
      <section className={styles.grid_container}>
        <Card />
      </section>
    </div>
  );
};

export default Home;
