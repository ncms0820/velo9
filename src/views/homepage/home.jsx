import React from "react";
import Header from "../header/header";
import styles from "./home.module.scss";
import Nav from "./nav";

const Home = (props) => (
  <div className={styles.container}>
    <Header />
    <Nav />
    <section>Main Section</section>
  </div>
);

export default Home;
