import React, { useEffect, useState } from "react";
import styles from "./currentParticipant.module.css";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { BASE_URL } from "../../../utils/constant";
var socket;
const CurrentParticipant = () => {
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut Zone",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Connect to the server
    socket = io(BASE_URL);
    
    // Join the zone
    socket.emit("join", "670e5df063e12ac02509fc9b");

    // Listen for the selected-participant event
    socket.on("proceed-question", ({ success, resultId }) => {
      console.log(resultId,"resultId");
      if (success && resultId) {
        
        // Navigate to the specific user page when the event is received
        navigate("/participant/question" );
      }
    });

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off("selected-participant");
    };
  }, []);
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.WelcomeText}>
            <img
              className={styles.logo_image}
              src="/images/logo.png"
              alt="location-img"
            />
            <img
              className={styles.locationImage}
              src="/images/homeLocation.png"
              alt="location-img"
            />
            {userData.place}
          </h2>
        </div>
        <div className={styles.currentparticipant}>
          <div className={styles.card}>
            <div className={styles.card_header}>
              <div className={styles.card_welcome_title_div}>
                <h1 className={styles.card_title}>Current participant</h1>
              </div>

              <div className={styles.image_div}>
                <img
                  src={userData.profileImage}
                  className={styles.user_image}
                  alt=""
                />
              </div>

              <h1 className={styles.card_name}>{userData.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentParticipant;
