import React from "react";
import styles from "./Card.module.css";

const QuestionCard = ({ number }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.questionText}>{`Q ${number}`}</h1>
    </div>
  );
};

export default QuestionCard;
