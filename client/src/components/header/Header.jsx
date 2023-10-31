import React from "react";

import styles from "./header.module.css";

import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="center">
      <div className={styles.header}>
        <Link to="/" className=".link">
          <h1 style={{ color: "#203656" }}>
            Hamza <span style={{ color: "#FE4F70" }}>.</span>
          </h1>
        </Link>

        {/*         <div className={styles.navigationLinks}>
          <div className={styles.navigationLink}>
            <p>Home</p>
          </div>
          <div className={styles.navigationLink}>
            <p>All Posts</p>
          </div>
          <div className={styles.navigationLink}>
            <p>Travel</p>
          </div>
          <div className={styles.navigationLink}>
            <p>Technology</p>
          </div>
        </div> */}
        <div className={styles.right}>
          <Link to="/register">
            <div className={styles.navigationLink}>
              <p>Register</p>
            </div>
          </Link>

          <Link to="/login">
            <div className={styles.navigationLink}>
              <p>Login</p>
            </div>
          </Link>

          <div className={styles.iconContainer}>
            <BsSearch style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <hr
        style={{
          color: "gray",
          margin: "0",
          padding: "0",
          marginBottom: "10px",
        }}
      />
    </div>
  );
};

export default Header;
