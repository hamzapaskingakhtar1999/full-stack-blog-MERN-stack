import React from "react";

import styles from "./hero.module.css";

import HeroImage from "../../assets/hero.svg";
import SidebarBlogs from "../sidebar/sidebar-blogs/SidebarBlogs";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.heroLeftText}>
          <h1 className={styles.heroTitle}>The Stars And It's Mysteries</h1>
          <p className={styles.heroSubtitle}>Katen Doe</p>
        </div>
      </div>
      <div className={styles.heroRight}>
        <SidebarBlogs />
      </div>
    </div>
  );
};

export default Hero;
