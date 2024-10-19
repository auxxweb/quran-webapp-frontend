import React from "react";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { clearJudge } from "../../redux/features/judgeSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const { judge } = useAppSelector((state) => state.judge);
  const dispatch = useAppDispatch();
  console.log(judge, "judge");
  const handleLogout = async () => {
    dispatch(clearJudge());
    navigate("/judge/login");
  };

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
            src={judge?.image}
            alt="User-Profile"
          />
          <div>
            <h1 className={styles.nameText}>
              {judge?.name} <br />
              <span className={styles.locationText}>
                <img
                  className={styles.locationIcon}
                  src="/images/location.png"
                  alt="User Profile"
                />
                {judge.zone}
              </span>
            </h1>
          </div>
          <button onClick={handleLogout}>
            <img
              className={styles.logoutImage}
              src="/images/logout.png"
              alt="User Profile"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
