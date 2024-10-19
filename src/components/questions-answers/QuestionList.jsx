import React, { useState } from "react";
import styles from "./QuestionList.module.css";
import QuestionCard from "./cards/QuestionCard";
import CompletedCard from "./cards/CompletedCard";
import NextCard from "./cards/NextCard";

const QuestionsList = ({ QuestionNumber, Questions }) => {
console.log(Questions,"Questions");

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_header}>
          {Questions?.map((value, index) => {
            if (index + 1 < QuestionNumber) {
              return <CompletedCard number={index + 1} key={value} />;
            } else if (index + 1 === QuestionNumber) {
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
