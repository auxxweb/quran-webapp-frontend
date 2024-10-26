import React, { useEffect, useState } from "react";
import styles from "./currentParticipant.module.css";
import {  useParams,useNavigate} from "react-router-dom";

import { getParticipantDetailsHandler } from "../../../api/participantApi.";
import Loading from "../../../components/loading/Loading";
const CurrentParticipant = ({zoneDetails}) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
      const data = await getParticipantDetailsHandler(id);
      if (data?.success) {
        setUserData(data.participant);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } else {
        navigate("/participant");
      }
      
    } catch (error) {
      setLoading(false);
      console.log(`Error occured in getParticipantDetailsHandler:${error}`);
      return;
    }
    })();
  }, [id]);

  return (
    <div className={styles.section}>
      {loading ? (
        <Loading/>
      ) : (

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
            {zoneDetails?.name}
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
                  src={userData?.image ?? "/images/profileImage.jpg"}
                  className={styles.user_image}
                  alt=""
                />
              </div>

              <h1 className={styles.card_name}>{userData?.name}</h1>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default CurrentParticipant;
