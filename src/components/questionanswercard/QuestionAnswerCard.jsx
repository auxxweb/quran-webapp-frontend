import React from "react";
import styles from "./QuestionAnswerCard.module.css";
import { getTextDirection } from "../../utils/constant";

const QuestionAnswerCard = ({ titile, descrption, border }) => {
  return (
    <div className={styles.main_section}>
      <h1 className={`${styles.titile} border-[${border}]`}>{titile}</h1>
      <p className={styles.descrption} dir={getTextDirection(descrption)}>{descrption}</p>
    </div>
  );
};

export default QuestionAnswerCard;
