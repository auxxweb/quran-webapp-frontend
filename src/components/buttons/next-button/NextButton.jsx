import React from "react";
import styles from "./NextButton.module.css";

const NextButton = ({text}) => {
  return (
    <button type="button" className={styles.next_button}>
     {text}
    </button>
  );
};

export default NextButton;
