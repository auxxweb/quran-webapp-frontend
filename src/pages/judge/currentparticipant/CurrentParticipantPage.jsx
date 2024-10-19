import React, { useState } from "react";
import NavBar from "../../../components/navBar/NavBar";
import styles from "./Participantpage.module.css";
import CurrentParticipant from "../../../components/currentparticipant/CurrentParticipant";
import { useAppSelector } from "../../../redux/store";

const CurrentParticipantPage = () => {
  const { judge } = useAppSelector((state) => state.judge);

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
            {judge.zone}
          </h2>
        </div>
        <div className={styles.currentparticipant}>
          <CurrentParticipant  />
        </div>
      </div>
    </div>
  );
};

export default CurrentParticipantPage;
