import React from "react";
import styles from "./home.module.css";
import ParticipantNavBar from "../../../components/participant/participant-navBar/ParticipantNavBar";
import CircularTimer from "../../../components/timer/Timer";
import UserQuestions from "../../../components/user-questions-show/UserQuestionsShow";

const Home = () => {
  return (
    <div className={styles.section}>
      <ParticipantNavBar>
        <div className="h-full space-y-10">
          <h1 className={styles.award_text}>ASLAM HOLY QUR’AN AWARD</h1>
          <div className={styles.main_div}>
            <CircularTimer />
          </div>
          <div className={styles.question_div}>
            <UserQuestions
              titile={"Question 1"}
              border={"#C19D5C"}
              descrption={"What are some other names for the Quran?"}
            />
          </div>
        </div>
      </ParticipantNavBar>
    </div>
  );
};

export default Home;
