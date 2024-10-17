import React, { useState } from "react";
import NavBar from "../../../components/navBar/NavBar";
import styles from "./Participantpage.module.css";
import CurrentParticipant from "../../../components/currentparticipant/CurrentParticipant";

const CurrentParticipantPage = () => {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
  });
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <button>
            <img
              className={styles.locationImage}
              src="/images/rigtharrow.png"
              alt=""
            />
          </button>

          <h2 className={styles.WelcomeText}>
            <img
              className={styles.locationImage}
              src="/images/homeLocation.png"
              alt="location-img"
            />
            {userData.place}
          </h2>
        </div>
        <div className={styles.currentparticipant}>
          <CurrentParticipant />
        </div>
      </div>
    </div>
  );
};

export default CurrentParticipantPage;
