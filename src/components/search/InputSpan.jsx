import React from "react";
import styles from "./_search.module.scss";

const InputSpan = React.memo(() => {
  {
    /* var show or not*/
  }
  return (
    <span className={styles.inputSpan}>
      <span className={styles.inputSpanInside}>/</span>
      <span className={styles.inputSpanInside}>C^▲</span>
      <span className={styles.inputSpanInside}>C^▼</span>
    </span>
  );
});

export default InputSpan;
