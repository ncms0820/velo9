import React from "react";
import { ClipLoader } from "react-spinners";
import styles from "./_error.module.scss";

const Error = (props) => (
  <div className={styles.div}>
    <ClipLoader size={20} color={"#123abc"} loading={true} speedMultiplier={1.5} />
    <h1>{props.title}...</h1>
  </div>
);

export default Error;
