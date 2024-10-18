import React, { useEffect, useState } from "react";
import styles from "./CurrentParticipant.module.css";
import GradientButton from "../buttons/gradientbutton/GradientButton";
import { useNavigate, useParams } from "react-router-dom";
import { get, post } from "../../api/api";

const CurrentParticipant = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await get("/judge/users/" + id);
      setUserData(data.participant);
    })();
  }, [id]);

  const onClick = async () => {
    const data = await post("/judge/users/proceed-to-question", {
      participant_id: id,
      startTime: new Date(),
    });
    if (data?.success) {
      const resultId=data?._id??data.result._id
      navigate("/judge/question-answer/" + resultId);
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_welcome_title_div}>
          <h1 className={styles.card_title}>Current participant</h1>
        </div>

        <div className={styles.image_div}>
          <img
            src={userData?.profileImage ?? "/images/profileImage.jpg"}
            className={styles.user_image}
            alt=""
          />
        </div>

        <h1 className={styles.card_name}>{userData?.name}</h1>
        <GradientButton onClick={onClick} titile="Proceed to Question" />
      </div>
    </div>
  );
};

export default CurrentParticipant;
