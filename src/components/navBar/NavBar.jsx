import React, { useState } from "react";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const judgeDetailsData = useSelector((state) => state.judgeInfo.judge);
  console.log(judgeDetailsData);

  const [userData, setUserData] = useState({
    name: "David Cooper",
    place: "Calicut",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  });

  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.navBarContent}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logoImage}
            onClick={() => navigate("/judge")}
            src="/images/logo_-name.png"
            alt="Company-logo"
          />
        </div>
        <div className={styles.userProfileContainer}>
          <img
            className={styles.userProfileImage}
            src={userData.profileImage}
            alt="User-Profile"
          />
          <div>
            <h1 className={styles.nameText}>
              {judgeDetailsData?.name} <br />
              <span className={styles.locationText}>
                <img
                  className={styles.locationIcon}
                  src="/images/location.png"
                  alt="User Profile"
                />
                {userData.place}
              </span>
            </h1>
          </div>
          <img
            className={styles.logoutImage}
            src="/images/logout.png"
            alt="User Profile"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
