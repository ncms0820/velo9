import React from "react";
import styles from "./_search.module.scss";

const List = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default List;
