import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.currentparticipant}>
          <a href="#" className={styles.logo}>
            <img className="w-8 h-8 mr-2" src="/images/logo.png" alt="logo" />
          </a>
          <h1 className={styles.arabic_text}>جائزة أسلم للقرآن الكريم</h1>
          <h1 className={styles.award_text}>ASLAM HOLY QUR’AN AWARD</h1>
          <img
            className={styles.line}
            src="/images/login-page-line.png"
            alt="line"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
