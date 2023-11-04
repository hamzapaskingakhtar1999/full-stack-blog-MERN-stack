import React, { useState } from "react";

import styles from "./header.module.css";

import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="center">
      <div className={styles.header}>
        <Link to="/" className=".link">
          <h1 style={{ color: "#203656" }}>
            Hamza <span style={{ color: "#FE4F70" }}>.</span>
          </h1>
        </Link>

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
            <BsSearch className={styles.headerButton} />
          </div>
          <div
            className={`${styles.iconContainer} ${styles.hide}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineClose className={styles.headerButton} />
            ) : (
              <AiOutlineMenuFold className={styles.headerButton} />
            )}
          </div>
        </div>
        {isOpen && (
          <div className={styles.popUp}>
            <Link to="/" className=".link">
              <h1 style={{ color: "#203656" }}>
                Hamza <span style={{ color: "#FE4F70" }}>.</span>
              </h1>
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                gap: "20px",
                cursor: "pointer",
              }}
            >
              <h3>Home</h3>
              <h3>Register</h3>
              <h3>Login</h3>
            </div>
          </div>
        )}
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
