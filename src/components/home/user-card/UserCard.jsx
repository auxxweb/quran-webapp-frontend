import React, { useEffect, useState } from "react";
import styles from "./UserCard.module.css";
import UserPopup from "./user-popup/UserPopup";
import { io } from "socket.io-client";
import { BASE_URL } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store";
import { Bounce, toast } from "react-toastify";
var socket;
const UserCard = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { judge } = useAppSelector((state) => state.judge);

  const navigate = useNavigate();

  useEffect(() => {
    socket = io(BASE_URL);
    socket.emit("join", judge?.zoneId);
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
    if(user?.hasParticipated){
      toast.error("This participant already participated this competition", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }else{
    socket.emit("selected-participant", {
      success: true,
      userId: user?._id,
      zoneId: judge?.zoneId,
    });
    }
    

  };
  return (
    <div className={styles.mainContainer}>
      <div
        onClick={() => setIsOpen(true)}
        className={styles.dotsImageContainer}
      >
        <img src="/images/three-dots.png" className={styles.dotsImage} alt="" />
      </div>
      <div onClick={() => setIsOpen(true)} className={styles.dataDiv}>
        <div>
          <div className={styles.profileImageWrapper}>
            <img
              className={styles.profileImage}
              src={user.image ?? "/images/profileImage.jpg"}
              alt="User-Profile"
            />
          </div>
          <h1 className={styles.userNameText}>{user.name}</h1>
        </div>
      </div>
      {isOpen && (
        <UserPopup
          handleSelectClick={handleSelectClick}
          user={user}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default UserCard;
