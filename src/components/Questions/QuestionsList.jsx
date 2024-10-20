import React, { useState } from "react";
import styles from "./QuestionsList.module.css";
import QuestionCard from "../qestion-cards/QuestionCard";
import CompletedCard from "../qestion-cards/CompletedCard";
import NextCard from "../qestion-cards/NextCard";

const QuestionsList = ({ QuestionNumber, Questions }) => {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_header}>
          {Questions.map((value, index) => {
            if (index + 1 <= QuestionNumber) {
              return <CompletedCard number={index + 1} key={value} />;
            } else if (index + 1 === QuestionNumber+1) {
              return <NextCard number={index + 1} key={value} />;
            } else {
              return <QuestionCard number={index + 1} key={value} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionsList;
