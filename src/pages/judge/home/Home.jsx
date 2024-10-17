import React, { useState } from "react";
import styles from "./home.module.css";
import Users from "../../../components/home/users/Users";
import Loading from "../../../components/loading/Loading";

const Home = () => {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
  });
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
              {userData.place}
            </h2>
          </div>
          <h1 className={styles.nameText}>{userData.name}</h1>
          <Users />
        </div>
      </div>
  );
};

export default Home;
