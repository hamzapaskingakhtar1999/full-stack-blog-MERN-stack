import React, { useState } from "react";

import styles from "./header.module.css";

import { Link, useNavigate } from "react-router-dom";

import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";

import { useGetUserName } from "../../hooks/useGetUserName";

import { useCookies } from "react-cookie";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [nameCookies, setNameCookies] = useCookies(["name_cookies"]);

  const name = useGetUserName();

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    setNameCookies("name_cookies", "");
    window.localStorage.removeItem("userName");
    navigate("/login");
  };
  return (
    <div className="center">
      <div className={styles.header}>
        <Link to="/" className=".link">
          <h1 style={{ color: "#203656" }}>
            Hamza <span style={{ color: "#FE4F70" }}>.</span>
          </h1>
        </Link>

        <div className={styles.right}>
          {!cookies.access_token ? (
            <>
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
            </>
          ) : (
            <>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <BsPersonCircle size={30} color="tomato" />
                <p>{name}</p>
              </div>
              <button onClick={logout} className="actionButton">
                Sign Out
              </button>
            </>
          )}

          {/*       <div className={styles.iconContainer}>
            <BsSearch className={styles.headerButton} />
          </div> */}
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
