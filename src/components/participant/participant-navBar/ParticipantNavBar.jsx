import React, { useState } from "react";
import styles from "./ParticipantNavBar.module.css";

const ParticipantNavBar = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.WelcomeText}>
          <img
            className={styles.locationImage}
            src="/images/homeLocation.png"
            alt="location-img"
          />
          {userData.place}
        </h2>
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

      {children}
    </div>
  );
};

export default ParticipantNavBar;
