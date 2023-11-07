import React from "react";

import styles from "./footer.module.css";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="center">
      <hr style={{ marginTop: "50px" }} />
      <div className={styles.footer}>
        <span>© {year} Hamza.</span>
        <div className={styles.socialLinks}>
          <FaFacebookF className={styles.socialLink} />
          <FaLinkedinIn className={styles.socialLink} />
          <FaInstagram className={styles.socialLink} />
          <FaYoutube className={styles.socialLink} />
        </div>
        <span>Developed by Hamza Pasking Akhtar</span>
      </div>
    </div>
  );
};

export default Footer;
