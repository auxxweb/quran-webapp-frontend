import React from "react";
import styles from "./QuestionCard.module.css";

const QuestionCard = ({ number }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.questionText}>{`Question ${number}`}</h1>
    </div>
  );
};

export default QuestionCard;
