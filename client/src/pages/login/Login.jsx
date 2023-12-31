import React, { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "./login.module.css";

import login from "../../assets/login.svg";

import axios from "axios";

import { useCookies } from "react-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookies] = useCookies(["access_token"]);
  const [nameCookies, setNameCookies] = useCookies(["name_cookies"]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://full-stack-blog-mern-stack.vercel.app/api/login",
        { email, password }
      );

      if (res.data.message == "") {
        navigate("/");
        setCookies("access_token", res.data.token);
        setNameCookies("name_cookies", res.data.name);
        window.localStorage.setItem("userID", res.data.userID);
        window.localStorage.setItem("userName", res.data.name);
      } else alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.loginLeft}>
          <img src={login} alt="Login" />
          <div className={styles.imageContent}>
            <h2>Welcome</h2>
            <p>
              Login to create your own blog, comment your own thoughts. Sharing
              of information and knowledge is always fun and encouraged.
            </p>
          </div>
        </div>
        <div className={styles.loginRight}>
          {/*      <div className={styles.topFormNavigation}>
            <Link className="Link" to="/login">
              <div className={styles.topFormNavigationItem}>
                <p>Login</p>
              </div>
            </Link>

            <Link className="Link" to="/register">
              <div className={styles.topFormNavigationItem}>
                <p>Register</p>
              </div>
            </Link>
          </div> */}
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Login</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                className={styles.formInput}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>Password</label>
              <input
                type="password"
                className={styles.formInput}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button className={styles.loginButton} type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
