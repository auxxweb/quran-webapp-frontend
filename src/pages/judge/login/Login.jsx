import React, { useState } from "react";
import styles from "./Login.module.css";
import { PiEyeFill, PiEyeSlashFill } from "react-icons/pi";

import GradientButton from "../../../components/buttons/gradientbutton/GradientButton";
import { loginValiDate } from "../../../utils/validate";
import { useHttpRequests } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { setJudge } from "../../../redux/features/judgeSlice";

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { post } = useHttpRequests();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [remember, setRemember] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [formError, setFormError] = useState({
    email_err: "Please enter a email",
    password_err: "Please enter a  password s",
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
    const validate = await loginValiDate(formData, setFormError, formError);

    if (validate) {
      const response = await post("/judge/auth/login/", formData);
      if (response?.success) {
        localStorage.setItem("access_token", response?.data?.token);
        setSubmit(false);
        dispatch(setJudge(response.data));
        navigate("/judge");
      } else {
        setFormError({
          ...formError,
          email_err: response.errors?.email ?? "",
          password_err: response.errors?.password ?? "",
          common_err: response.errors?.common ?? "",
        });
      }
    } else {
      setFormError({
        ...formError,
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
                  name="email"
                  id="name"
                  className={styles.input}
                  placeholder="Email"
                  onChange={handleChange}
                />
                {submit && (
                  <p className="text-center text-red-500 text-sm">
                    {formError.email_err}
                  </p>
                )}
              </div>
              <div>
                <div className="relative">
                  <input
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className={styles.input}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    class="absolute inset-y-0 end-0 text-xl  flex items-center  z-20 px-3  cursor-pointer text-black rounded-e-md   "
                  >
                    {showPassword ? <PiEyeSlashFill /> : <PiEyeFill />}
                  </button>
                </div>

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
                      }}
                    />
                  </div>
                  <div className={styles.checkbox_label}>
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  {remember === false && (
                    <p className="text-end text-red-500 text-sm ">
                      {formError?.remember_err}
                    </p>
                  )}
                </div>
              </div>
              {submit && (
                <p className="text-center text-red-500 text-sm my-1">
                  {formError.common_err}
                </p>
              )}
              <GradientButton onClick={handleSubmit} titile="Login" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
