import React, { useEffect } from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import { useHttpRequests } from "../../../api/api";

const Home = ({ zoneDetails }) => {

  const navigate = useNavigate()
  const { get } = useHttpRequests()

  useEffect(() => {
    featchResultDetails()
  }, [])

  const featchResultDetails = async () => {

    const data = await get(`/judge/participant/questions/zone/${zoneDetails?._id}`)
    if (data && data?.data?.length > 0) {
      navigate(
       `/participant/${zoneDetails?._id}/question/${data?.data[0]?._id}/${data?.data[0]?.currentQuestion
       }`
      )
    }
  }


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
            {zoneDetails?.name}
          </h2>
        </div>
        <div className={styles.currentparticipant}>
          <a href="#" className={styles.logo}>
            <img className="w-8 h-8 mr-2" src="/images/logo.png" alt="logo" />
          </a>
          <h1 className={styles.arabic_text}>جائزة أسلم للقرآن الكريم</h1>
          <h1 className={styles.award_text}>ASLAM HOLY QUR’AN AWARD</h1>
          <img
            className={styles.line}
            src="/images/login-page-line.png"
            alt="line"
          />
          <div className=" text-3xl md:text-4xl mt-10 font-[Amiri-Quran] text-center">
          Welcome to the {zoneDetails?.name} Zone Quiz Competition.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
