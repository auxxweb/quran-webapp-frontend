import React, { useState } from "react";
import styles from "./Login.module.css";
import GradientButton from "../../../components/buttons/gradientbutton/GradientButton";
import { loginValiDate } from "../../../utils/validate";
import { post } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [remember, setRemember] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    name_err: "",
    password_err: "",
    remember_err: "",
    common_err: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    loginValiDate({ ...formData, [name]: value }, setFormError, formError);
  };

  const handleSubmit = async () => {
    setSubmit(true);
    await loginValiDate(formData, setFormError, formError);
    if (remember) {
      const responce = await post("/judge/auth/login/", formData);
      console.log(responce);
      if (responce?.success) {
        setSubmit(false);
        localStorage.setItem("access_token", responce?.data?.token);
        navigate("/judge");
      } else {
        setFormError({
          ...formError,
          name_err: responce.errors?.name ?? "",
          password_err: responce.errors?.password ?? "",
          common_err: responce.errors?.common ?? "",
        });
      }
    } else {
      setFormError({
        ...formError,
        remember_err: "Please check the box.'",
      });
    }
  };

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
                  name="name"
                  id="name"
                  className={styles.input}
                  placeholder="Username"
                  onChange={handleChange}
                />
                {submit && (
                  <p className="text-center text-red-500 text-sm">
                    {formError.name_err}
                  </p>
                )}
              </div>
              <div>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className={styles.input}
                />
                {submit && (
                  <p className="text-center text-red-500 text-sm my-1">
                    {formError.password_err}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className={styles.checkbox}>
                  <div className="flex items-center h-5">
                    <input
                      value={remember}
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className={styles.checkbox_input}
                      name="remember"
                      onChange={() => {
                        setRemember(!remember);
                        console.log(remember);
                      }}
                    />
                  </div>
                  <div className={styles.checkbox_label}>
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  {submit && (
                    <p className="text-center text-red-500 text-sm my-1">
                      {formError.remember_err}
                    </p>
                  )}
                </div>
              </div>
              <GradientButton onClick={handleSubmit} titile="Login" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
