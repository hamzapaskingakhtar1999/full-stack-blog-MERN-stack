import React, { useState } from "react";

import styles from "./register.module.css";

import register from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/register", {
      name,
      email,
      password,
    });
    console.log(res.data);
    /*   navigate("/"); */
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerContainer}>
        <div className={styles.registerLeft}>
          <img src={register} alt="Register Image" />
          <div className={styles.imageContent}>
            <h2>Welcome</h2>
            <p>
              Register to create your own blog. Comment your own thoughts.
              Sharing of information and knowledge is always fun and encouraged.
            </p>
          </div>
        </div>
        <div className={styles.registerRight}>
          <div className={styles.topFormNavigation}>
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
          </div>
          <div className={styles.formContainer}>
            <h1 className={styles.formTitle}>Register</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Enter Your Full Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
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
              <button className={styles.registerButton} type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
