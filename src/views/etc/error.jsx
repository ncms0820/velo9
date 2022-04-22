import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import styles from "./_error.module.scss";

const Error = ({ handleTab, title }) => {
  useEffect(() => {
    setTimeout(() => {
      return handleTab();
    }, 2000);
  }, [handleTab]);
  return (
    <div className={styles.div}>
      <ClipLoader size={20} color={"#123abc"} loading={true} speedMultiplier={1.5} />
      <h1>{title}...</h1>
    </div>
  );
};

export default Error;
