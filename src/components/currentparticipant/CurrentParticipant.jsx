import React from "react";
import styles from "./CurrentParticipant.modules.css";

const CurrentParticipant = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_welcome_title_div}>
          <h1 className={styles.card_welcome_title}>Welcome Back</h1>
        </div>

        <h1 className={styles.card_title}>Login</h1>
        <p className={styles.card_descrption}>Glad you’re back.!</p>
        <form className={styles.form} action="#">
          <div>
            <input
              type="text"
              name="Username"
              id="Username"
              className={styles.input}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className={styles.input}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className={styles.checkbox}>
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className={styles.checkbox_input}
                  required
                />
              </div>
              <div className={styles.checkbox_label}>
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>
          </div>
          <div className={styles.submit_button_div}>
            <button type="button" className={styles.submit_button}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CurrentParticipant;
