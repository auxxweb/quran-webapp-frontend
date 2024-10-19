import React, { useState } from "react";
import styles from "./home.module.css";
import Users from "../../../components/home/users/Users";
import Loading from "../../../components/loading/Loading";
import { useAppSelector } from "../../../redux/store";

const Home = () => {
  const { judge } = useAppSelector((state) => state.judge);

  return (
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.WelcomeText}>Welcome</h2>
            <h2 className={styles.WelcomeText}>
              <img
                className={styles.locationImage}
                src="/images/homeLocation.png"
                alt="location-img"
              />
              {judge.zone}
            </h2>
          </div>
          <h1 className={styles.nameText}>{judge.name}</h1>
          <Users />
        </div>
      </div>
  );
};

export default Home;
