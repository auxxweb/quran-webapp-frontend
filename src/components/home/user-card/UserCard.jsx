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
    // Connect to the server
    socket = io(BASE_URL);
    
    // Join the zone
    socket.emit("join", "670e5df063e12ac02509fc9b");

    // Listen for the selected-participant event
    socket.on("selected-participant", ({ success, userId }) => {
      console.log(userId,"userId");
      if (success && userId) {
        
        // Navigate to the specific user page when the event is received
        navigate(`/judge/current-participant/${userId}`);
      }
    });

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off("selected-participant");
    };
  }, []);
  const handleSelectClick = () => {
    // Emit the selected-participant event to the server
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
