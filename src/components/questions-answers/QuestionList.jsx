import React, { useState } from "react";
import styles from "./QuestionList.module.css";
import QuestionCard from "./cards/QuestionCard";
import CompletedCard from "./cards/CompletedCard";
import NextCard from "./cards/NextCard";

const QuestionsList = ({ QuestionNumber, Questions }) => {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_header}>
          {Questions.map((value, index) => {
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
