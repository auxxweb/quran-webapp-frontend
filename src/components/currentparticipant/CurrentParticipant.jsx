import React, { useState } from "react";
import styles from "./CurrentParticipant.module.css";
import GradientButton from "../buttons/gradientbutton/GradientButton";
import { useNavigate } from "react-router-dom";

const CurrentParticipant = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });
  const onClick=()=>{
    navigate('/judge/question-answer/id')
  }
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_welcome_title_div}>
          <h1 className={styles.card_title}>Current participant</h1>
        </div>

        <div className={styles.image_div}>
          <img src={userData.profileImage} className={styles.user_image} alt="" />
        </div>

        <h1 className={styles.card_name}>{userData.name}</h1>
        <GradientButton onClick={onClick} titile="Proceed to Question" />
      </div>
    </div>
  );
};

export default CurrentParticipant;
