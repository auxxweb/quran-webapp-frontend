import React, { useEffect, useState } from "react";
import styles from "./UserCard.module.css";
import UserPopup from "./user-popup/UserPopup";
import { io } from "socket.io-client";
import { BASE_URL } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
var socket;
const UserCard = ({user}) => {
  const [isOpen,setIsOpen]=useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    socket = io(BASE_URL);
    socket.emit("join", "670e5df063e12ac02509fc9b");
    socket.on("selected-participant", ({ success, userId }) => {
      if (success && userId) {
        navigate(`/judge/current-participant/${userId}`);
      }
    });

    return () => {
      socket.off("selected-participant");
    };
  }, []);
  const handleSelectClick = () => {
    socket.emit("selected-participant", { success: true, userId: user?._id, zoneId: "670e5df063e12ac02509fc9b" });
  };
  return (
    <div className={styles.mainContainer}>
      <div onClick={()=>setIsOpen(true)}  className={styles.dotsImageContainer}>
        <img src="/images/three-dots.png" className={styles.dotsImage} alt="" />
      </div>
      <div onClick={()=>setIsOpen(true)}  className={styles.dataDiv}>
        <div>
          <div className={styles.profileImageWrapper}>
            <img
              className={styles.profileImage}
              src={user.image??'/images/profileImage.jpg'}
              alt="User-Profile"
            />
          </div>
          <h1 className={styles.userNameText}>
            {user.name}
          </h1>
        </div>
      </div>
     {isOpen&& <UserPopup handleSelectClick={handleSelectClick} user={user} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default UserCard;
