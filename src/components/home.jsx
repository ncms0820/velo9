import React from "react";
import styles from "./home.module.scss";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className={styles.test}>Home</h1>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        Go to Profile
      </button>
    </>
  );
};

export default Home;
