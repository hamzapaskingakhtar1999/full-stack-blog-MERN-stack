import React from "react";

import styles from "./allpost.module.css";

import { BsSearch } from "react-icons/bs";

import SidebarBlogs from "../sidebar/sidebar-blogs/SidebarBlogs";
import SidebarAbout from "../sidebar/sidebar-about/SidebarAbout";

const AllPost = () => {
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
          <div className={styles.post}>
            <div className={styles.postImageContainer}>
              <img
                src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/drop-the-label-movement-608463-unsplash-325x233.jpg"
                className={styles.postImage}
              />
            </div>
            <div className={styles.postTexts}>
              <div className={styles.userDetails}>
                <p className={styles.name}>Katen Doe</p>
                <h3 style={{ color: "tomato" }}>-</h3>
                <p className={styles.date}>October 29, 2023</p>
              </div>
              <div className={styles.blogDetails}>
                <h3 className={styles.blogTitle}>
                  Facts About Business That Will Help You Success
                </h3>
                <p className={styles.blogDescription}>
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,…
                </p>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.postImageContainer}>
              <img
                src="https://themeger.shop/wordpress/katen/wp-content/uploads/2022/08/drop-the-label-movement-608463-unsplash-325x233.jpg"
                className={styles.postImage}
              />
            </div>
            <div className={styles.postTexts}>
              <div className={styles.userDetails}>
                <p className={styles.name}>Katen Doe</p>
                <h3 style={{ color: "tomato" }}>-</h3>
                <p className={styles.date}>October 29, 2023</p>
              </div>
              <div className={styles.blogDetails}>
                <h3 className={styles.blogTitle}>
                  Facts About Business That Will Help You Success
                </h3>
                <p className={styles.blogDescription}>
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,…
                </p>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.postImageContainer}>
              <img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80"
                className={styles.postImage}
              />
            </div>
            <div className={styles.postTexts}>
              <div className={styles.userDetails}>
                <p className={styles.name}>Katen Doe</p>
                <h3 style={{ color: "tomato" }}>-</h3>
                <p className={styles.date}>October 29, 2023</p>
              </div>
              <div className={styles.blogDetails}>
                <h3 className={styles.blogTitle}>
                  Facts About Business That Will Help You Success
                </h3>
                <p className={styles.blogDescription}>
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,…
                </p>
              </div>
            </div>
          </div>
          <div className={styles.post}>
            <div className={styles.postImageContainer}>
              <img
                src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                className={styles.postImage}
              />
            </div>
            <div className={styles.postTexts}>
              <div className={styles.userDetails}>
                <p className={styles.name}>Katen Doe</p>
                <h3 style={{ color: "tomato" }}>-</h3>
                <p className={styles.date}>October 29, 2023</p>
              </div>
              <div className={styles.blogDetails}>
                <h3 className={styles.blogTitle}>
                  Facts About Business That Will Help You Success
                </h3>
                <p className={styles.blogDescription}>
                  The European languages are members of the same family. Their
                  separate existence is a myth. For science, music, sport, etc,…
                </p>
              </div>
            </div>
          </div>
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
