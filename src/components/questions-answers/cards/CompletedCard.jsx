import React from "react";
import styles from "./Card.module.css";

const CompletedCard = ({ number,onClick }) => {
  return (
    <div onClick={onClick} className={styles.completedCard}>
      <h1 className={styles.completedText}>{`Q ${number}`}</h1>
    </div>
  );
};

export default CompletedCard;
