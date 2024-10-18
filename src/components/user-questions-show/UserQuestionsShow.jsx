import React from "react";
import styles from "./UserQuestionsShow.module.css";

const UserQuestions = ({ titile, descrption, border }) => {
  return (
    <div className={styles.main_section}>
      <h1 className={`${styles.titile} border-[${border}]`}>{titile}</h1>
      <p className={styles.descrption}>{descrption}</p>
    </div>
  );
};

export default UserQuestions;
