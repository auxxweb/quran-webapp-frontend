import React from "react";
import styles from "./NextButton.module.css";

const NextButton = ({text,onClick}) => {
  return (
    <button onClick={onClick} type="button" className={styles.next_button}>
     {text}
    </button>
  );
};

export default NextButton;
