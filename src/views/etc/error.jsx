import React from "react";
import styles from "./_error.module.scss";

const Error = (props) => <div className={styles.div}>{props.title}</div>;

export default Error;
