import React, { useEffect } from "react";
import styles from "./userPopup.module.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../utils/constant";
// import { io } from "socket.io-client";
var socket;

const UserPopup = ({ setIsOpen, user ,handleSelectClick}) => {
  const navigate = useNavigate();

  
  // useEffect(() => {
  //   // Connect to the server
  //   socket = io(BASE_URL);
    
  //   // Join the zone
  //   socket.emit("join", "670e5df063e12ac02509fc9b");

  //   // Listen for the selected-participant event
  //   socket.on("selected-participant", ({ success, userId }) => {
  //     console.log(userId,"userId");
  //     if (success && userId) {
        
  //       // Navigate to the specific user page when the event is received
  //       navigate(`/judge/current-participant/${userId}`);
  //     }
  //   });

  //   return () => {
  //     // Clean up the event listener when the component unmounts
  //     socket.off("selected-participant");
  //   };
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.popup}>
        <div className={styles.header}>
          <div className={styles.closeImageContainer}>
            <img
              src="/images/close-button.png"
              onClick={() => setIsOpen(false)}
              className={styles.closeButtonImage}
              alt="close-button"
            />
          </div>
          <div className={styles.photoContainer}>
            <div className={styles.photoWrapper}>
              <img className={styles.photo} src={user.image??'/images/profileImage.jpg'} alt="John Doe" />
            </div>
            <div className={styles.nameText}>{user.name}</div>
            <div className="flex justify-center">
              <div className="flex w-[50vh] flex-col gap-3">
                <InfoRow title="Phone" colour ={true} data={user.phone} />
                <InfoRow title="Email" colour ={true}  data={user.email} />
                <InfoRow title="Age" data={user.age} />
                <InfoRow title="Gender" data={user.gender} />
                <InfoRow
                  title="Address"
                  data={user.address}
                />
              </div>
            </div>
              <div className="flex w-full justify-center mb-5 mt-7">
                {/* <button onClick={()=>navigate("/judge/current-participant/"+user._id)} className={styles.button}>
                  Select
                </button> */}
               <button onClick={handleSelectClick} className={styles.button}>
                Select
              </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ title, data ,colour}) => {
  return (
    <div className="grid grid-cols-2  ">
      <div className="font-inter text-sm text-[#373B3E] font-semibold leading-[22.5px] text-left">
        {title}
      </div>
      <div className={`${colour?'text-[#1DB290] ':'text-[#7A7C7F]'} font-inter text-sm  font-medium leading-[22.5px] `}>
        {data}
      </div>
    </div>
  );
};

export default UserPopup;
