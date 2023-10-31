import React from "react";

import styles from "./sidebarabout.module.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SidebarAbout = () => {
  return (
    <div className={styles.sidebarAbout}>
      <h2 style={{ color: "#203656", textAlign: "center" }}>
        Hamza <span style={{ color: "#FE4F70" }}>.</span>
      </h2>
      <p className={styles.aboutText}>
        Hello, We're content writer who is fascinated by travel, and technology.
        We help clients bring the right content to the right people.
      </p>
      <div className={styles.socialLinks}>
        <FaFacebookF className={styles.socialLink} />
        <FaLinkedinIn className={styles.socialLink} />
        <FaInstagram className={styles.socialLink} />
        <FaYoutube className={styles.socialLink} />
      </div>
    </div>
  );
};

export default SidebarAbout;
