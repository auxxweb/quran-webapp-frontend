import React, { useEffect, useState } from "react";
import styles from "./CurrentParticipant.module.css";
import GradientButton from "../buttons/gradientbutton/GradientButton";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { BASE_URL } from "../../utils/constant";
import { useHttpRequests } from "../../api/api";
import { useAppSelector } from "../../redux/store";
var socket;
const CurrentParticipant = () => {
  const { judge } = useAppSelector((state) => state.judge);

  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { post, get } = useHttpRequests();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const data = await get("/judge/users/" + id);
      setUserData(data.participant);
    })();
  }, [id]);
  useEffect(() => {
    // Connect to the server
    socket = io(BASE_URL);

    // Join the zone
    socket.emit("join", "670e5df063e12ac02509fc9b");

    // Listen for the selected-participant event
    socket.on("proceed-question", ({ success, resultId }) => {
      console.log(resultId, "resultId");
      if (success && resultId) {
        // Navigate to the specific user page when the event is received
        navigate("/judge/question-answer/" + resultId);
      }
    });

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off("selected-participant");
    };
  }, []);

  const onClick = async () => {
    const data = await post("/judge/users/proceed-to-question", {
      participant_id: id,
      startTime: new Date(),
    });
    console.log(data, "data");

    console.log(data?.success, "ssssd");
    if (data?.success) {
      console.log(data?.result?._id, "result id");
      console.log(data?._id, "result id");

      const resultId = data?._id ?? data?.result?._id;
      console.log(resultId, "resultId");

      socket.emit("proceed-question", {
        success: true,
        resultId,
        zoneId: "670e5df063e12ac02509fc9b",
      });
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
        {judge?.isMain && (
          <GradientButton onClick={onClick} titile="Proceed to Question" />
        )}
      </div>
    </div>
  );
};

export default CurrentParticipant;
