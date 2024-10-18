import React, { useState } from "react";
import NavBar from "../../../components/navBar/NavBar";
import styles from "./QuestionsList.module.css";
import QuestionsList from "../../../components/Questions/QuestionsList";
import NextButton from "../../../components/buttons/next-button/NextButton";

const QuestionsListPage = () => {
  const [userData, setUserData] = useState({
    name: "Adarsh Raj",
    place: "Calicut Zone",
  });

  const data = ["qId1", "qId2", "qId3", "qId4", "qId5", "qId6", "qId7"];
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userDetailes}>
            <h2 className={styles.WelcomeText}>
              <img
                className={styles.locationImage}
                src="/images/homeLocation.png"
                alt="location-img"
              />
              {userData.place}
            </h2>
            <h2 className={styles.nameText}>{userData.name}</h2>
          </div>
        </div>
        <h1 className={styles.main_title}>Questions List</h1>
        <div className={styles.currentparticipant}>
          <QuestionsList QuestionNumber={3} Questions={data} />
        </div>
        <div className={styles.header}>
          <div className={styles.userDetailes}>
            <NextButton text={'Next'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsListPage;
