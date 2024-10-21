import React from "react";
import styles from "./error.module.css";
import { Link } from "react-router-dom";

const Error = () => {

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
         <div className=" font-semibold text-5xl md:text-7xl mt-10 font-[Amiri-Quran] text-center">
            404
          </div>
         <div className="font-[Amiri-Quran] py-3 text-3xl font-normal leading-6 tracking-wide text-center">
           Page Not Found 
          </div>
         <Link to={"/"} className="font-inter text-secondary py-3 text-lg font-normal leading-6 tracking-wide text-center">
          Back to home
          </Link>
      </div>
    </div>
  </div>
  );
};

export default Error;
