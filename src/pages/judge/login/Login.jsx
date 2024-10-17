import React from "react";
import styles from "./Login.module.css";
import GradientButton from "../../../components/gradientbutton/GradientButton";

function Login() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img className="w-8 h-8 mr-2" src="/images/logo.png" alt="logo" />
        </a>
        <h1 className={styles.arabic_text}>جائزة أسلم للقرآن الكريم</h1>
        <h1 className={styles.award_text}>ASLAM HOLY QUR’AN AWARD</h1>
        <img
          className={styles.line}
          src="/images/login-page-line.png"
          alt="line"
        />
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
              <GradientButton titile="Login" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
