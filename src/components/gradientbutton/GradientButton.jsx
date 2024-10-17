import React from "react";
import styles from './gradientbutton.module.css'

const GradientButton = ({titile}) => {
  return (
    <div className={styles.submit_button_div}>
      <button type="button" className={styles.submit_button}>
        {titile}
      </button>
    </div>
  );
};

export default GradientButton;
