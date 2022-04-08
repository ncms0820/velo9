import React from "react";
import Card from "../../components/card/card";
import Header from "../header/header";
import styles from "./home.module.scss";
import Nav from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => (
  <div className={styles.container}>
    <Header />
    <Nav />
    <section className={styles.grid_container}>
      <Card />
    </section>
  </div>
);

export default Home;
