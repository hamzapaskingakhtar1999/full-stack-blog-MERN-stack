import React from "react";

import styles from "./hero.module.css";

import HeroImage from "../../assets/hero.svg";
import SidebarBlogs from "../sidebar/sidebar-blogs/SidebarBlogs";
import { useGetUserName } from "../../hooks/useGetUserName";

const Hero = () => {
  let name = useGetUserName();
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <img
          src="https://www.linearity.io/blog/content/images/2022/03/610963083219da6a0a00ccb6_Cover-Dark-2.png"
          className={styles.heroImage}
        />
        <div className={styles.heroLeftText}>
          <h3 className={styles.heroSubtitle}>Hi, {name}</h3>
          <h1 className={styles.heroTitle}>Create a blog...</h1>
          <h2 className={styles.heroSubtitle}> Share your thoughts</h2>
        </div>
      </div>
      <div className={styles.heroRight}>
        <SidebarBlogs />
      </div>
    </div>
  );
};

export default Hero;
