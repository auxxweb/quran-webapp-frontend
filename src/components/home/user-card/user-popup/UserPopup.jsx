import React from "react";
import styles from "./userPopup.module.css";

const UserPopup = ({ setIsOpen, user }) => {
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
              <img className={styles.photo} src={user.image} alt="John Doe" />
            </div>
            <div className={styles.nameText}>{user.userName}</div>
            <div className="flex justify-center">
              <div className="flex w-[50vh] flex-col gap-3">
                <InfoRow title="Phone" colour ={true} data="+977 9955221114" />
                <InfoRow title="Email" colour ={true}  data="john@example.com" />
                <InfoRow title="Age" data="10" />
                <InfoRow title="Gender" data="Male" />
                <InfoRow
                  title="Address"
                  data="1861 Bayonne Ave, Manchester Township, NJ, 08759"
                />
              </div>
            </div>
              <div className="flex w-full justify-center mb-5 mt-7">
                <button className={styles.button}>
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
