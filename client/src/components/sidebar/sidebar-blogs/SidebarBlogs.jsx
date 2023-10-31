import React from "react";

import styles from "./sidebarblogs.module.css";

import SidebarImage from "../../../assets/hero.svg";

const SidebarBlogs = () => {
  return (
    <div className={styles.sidebarBlogs}>
      <p className={styles.sidebarBlogsHeading}>Latest Posts</p>
      <div className={styles.sidebarBlog}>
        <div className={styles.sidebarLeft}>
          <img src={SidebarImage} className={styles.sidebarImage} />
        </div>
        <div className={styles.sidebarRight}>
          <h4>3 Easy Ways To Make Your iPhone Faster</h4>
          <p>August 19, 2022</p>
        </div>
      </div>
      <div className={styles.sidebarBlog}>
        <div className={styles.sidebarLeft}>
          <img src={SidebarImage} className={styles.sidebarImage} />
        </div>
        <div className={styles.sidebarRight}>
          <h4>3 Easy Ways To Make Your iPhone Faster</h4>
          <p>August 19, 2022</p>
        </div>
      </div>
      <div className={styles.sidebarBlog}>
        <div className={styles.sidebarLeft}>
          <img src={SidebarImage} className={styles.sidebarImage} />
        </div>
        <div className={styles.sidebarRight}>
          <h4>3 Easy Ways To Make Your iPhone Faster</h4>
          <p>August 19, 2022</p>
        </div>
      </div>
      <div className={styles.sidebarBlog}>
        <div className={styles.sidebarLeft}>
          <img src={SidebarImage} className={styles.sidebarImage} />
        </div>
        <div className={styles.sidebarRight}>
          <h4>3 Easy Ways To Make Your iPhone Faster</h4>
          <p>August 19, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarBlogs;
