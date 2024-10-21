import React, { useState } from "react";
import styles from "./ParticipantNavBar.module.css";

const ParticipantNavBar = ({ children,data }) => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.WelcomeText}>
          <img
            className={styles.locationImage}
            src="/images/homeLocation.png"
            alt="location-img"
          />
          {data?.zone?.name}
        </h2>
        <div className={styles.userDetailes}>
          <h2 className={styles.WelcomeText}>
            <img
              className={styles.profileImage}
              src={data?.participant?.image}
              alt="location-img"
            />
            <span className={styles.nameText}>{data?.participant?.name}</span>
          </h2>
        </div>
      </div>

      {children}
    </div>
  );
};

export default ParticipantNavBar;
