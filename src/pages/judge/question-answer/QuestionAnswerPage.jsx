import React, { useState } from "react";
import styles from "./QuestionAnswerPage.module.css";
import NextButton from "../../../components/buttons/next-button/NextButton";
import NavBar from "../../../components/navBar/NavBar";

function QuestionAnswerPage() {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });
  return (
    <div className={styles.section}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.userDetailes}>
            <h2 className={styles.WelcomeText}>
              <img
                className={styles.profileImage}
                src={userData.profileImage}
                alt="location-img"
              />
              <span className={styles.nameText}>{userData.name}</span>
            </h2>
          </div>
        </div>
        <h1 className={styles.main_title}>Questions List</h1>
        <div className={styles.currentparticipant}>
          {/* <QuestionsList QuestionNumber={3} Questions={data} /> */}
        </div>
        <div className={styles.header}>
          <div className={styles.userDetailes}>
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionAnswerPage;
