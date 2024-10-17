import React from "react";
import styles from "./users.module.css";

const Users = () => {
  return (
    <div className={styles.mainContainer}>
      <div className="p-7 flex justify-between ">
        <h1 className={styles.headText}>Participants</h1>
      </div>
    </div>
  );
};

export default Users;
