import React, { useState } from "react";
import styles from "./UserCard.module.css";
import UserPopup from "./user-popup/UserPopup";

const UserCard = ({user}) => {
  const [isOpen,setIsOpen]=useState(false)
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
     {isOpen&& <UserPopup user={user} setIsOpen={setIsOpen}/>}
    </div>
  );
};

export default UserCard;