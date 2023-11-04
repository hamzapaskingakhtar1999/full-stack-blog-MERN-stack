import React, { useState, useEffect } from "react";

import styles from "./allpost.module.css";

import { BsSearch } from "react-icons/bs";

import SidebarBlogs from "../sidebar/sidebar-blogs/SidebarBlogs";
import SidebarAbout from "../sidebar/sidebar-about/SidebarAbout";

import { useBlogContext } from "../../hooks/useBlogContext";

const AllPost = () => {
  const { blogs, dispatch } = useBlogContext();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blogs");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: json });
      }
    };
    fetchBlogs();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.allPost}>
        {/*  */}
        <div className={styles.allPostTop}>
          <h1 className={styles.allPostTitle}>Posts</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
            <button className="actionButton">Create Post</button>
            <BsSearch className={styles.searchButton} />
          </div>
        </div>

        <div className={styles.categories}>
          <div className={styles.all}>
            <div className={styles.categoryText}>
              <h3>All Posts</h3>
              <h3 className={styles.postAmount}>4</h3>
            </div>
          </div>
          <div className={styles.technology}>
            <div className={styles.categoryText}>
              <h3>Technology</h3>
              <h3 className={styles.postAmount}>4</h3>
            </div>
          </div>
          <div className={styles.food}>
            <div className={styles.categoryText}>
              <h3>Food</h3>
              <h3 className={styles.postAmount}>4</h3>
            </div>
          </div>
          <div className={styles.travel}>
            <div className={styles.categoryText}>
              <h3>Travel</h3>
              <h3 className={styles.postAmount}>4</h3>
            </div>
          </div>
        </div>
        <div className={styles.posts}>
          {/* THIS IS FROM DATABASE */}

          {blogs &&
            blogs.map((item) => (
              <div className={styles.post}>
                <div className={styles.postImageContainer}>
                  <img
                    src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                    className={styles.postImage}
                  />
                </div>
                <div className={styles.postTexts}>
                  <div className={styles.userDetails}>
                    <p className={styles.name}>John Doe</p>
                    <h3 style={{ color: "tomato" }}>-</h3>
                    <p className={styles.date}>October 29, 2023</p>
                  </div>
                  <div className={styles.blogDetails}>
                    <h3 className={styles.blogTitle}>{item.title}</h3>
                    <p className={styles.blogDescription}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.sidebar}>
        <div className={styles.sidebarItem}>
          <SidebarAbout />
        </div>
        <div className={styles.sidebarItem}>
          <SidebarBlogs />
        </div>
      </div>
    </div>
  );
};

export default AllPost;
