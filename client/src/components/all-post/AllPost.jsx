import React, { useState, useEffect } from "react";

import styles from "./allpost.module.css";

import { Link } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

import SidebarBlogs from "../sidebar/sidebar-blogs/SidebarBlogs";
import SidebarAbout from "../sidebar/sidebar-about/SidebarAbout";

import { useGetUserID } from "../../hooks/useGetUserID";

import axios from "axios";

import parse from "html-react-parser";

const AllPost = () => {
  const [posts, setPosts] = useState(null);
  const [search, setSearch] = useState("");
  const [categoryItem, setCategoryItem] = useState("");
  const user = useGetUserID();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        "https://full-stack-blog-mern-stack.vercel.app/api/blogs"
      );
      setPosts(response.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.allPost}>
        {/*  */}
        <div className={styles.allPostTop}>
          <h1 className={styles.allPostTitle}>Posts</h1>
          <div className={styles.createPost}>
            <Link to="/create-post">
              <button className="actionButton">Write a Blog</button>
            </Link>

            <div className={styles.search}>
              <input
                type="text"
                placeholder="Search Blogs..."
                className={styles.searchInput}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
              <BsSearch className={styles.searchButton} />
            </div>
          </div>
        </div>

        <div className={styles.categories}>
          <div className={styles.all} onClick={() => setCategoryItem("")}>
            <div className={styles.categoryText}>
              <h3>All Posts</h3>
              {/*    <h3 className={styles.postAmount}>4</h3> */}
            </div>
          </div>
          <div
            className={styles.technology}
            onClick={() => setCategoryItem("Technology")}
          >
            <div className={styles.categoryText}>
              <h3>Technology</h3>
              {/*         <h3 className={styles.postAmount}>4</h3> */}
            </div>
          </div>
          <div className={styles.food}>
            <div
              className={styles.categoryText}
              onClick={() => setCategoryItem("Food")}
            >
              <h3>Food</h3>
              {/*         <h3 className={styles.postAmount}>4</h3> */}
            </div>
          </div>
          <div
            className={styles.travel}
            onClick={() => setCategoryItem("Travel")}
          >
            <div className={styles.categoryText}>
              <h3>Travel</h3>
              {/*            <h3 className={styles.postAmount}>4</h3> */}
            </div>
          </div>
        </div>
        <div className={styles.posts}>
          {/* THIS IS FROM DATABASE */}

          {posts &&
            posts
              .filter(
                (item) =>
                  item.category.includes(categoryItem) &&
                  item.title.toLowerCase().includes(search)
              )
              .map((item) => (
                <div className={styles.post}>
                  <Link to={`/${item._id}`}>
                    <div className={styles.postImageContainer}>
                      <p className={styles.categoryName}>{item.category}</p>
                      {item.imageUrl ? (
                        <img src={item.imageUrl} className={styles.postImage} />
                      ) : (
                        <img
                          src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg"
                          className={styles.postImage}
                        />
                      )}
                    </div>
                    <div className={styles.postTexts}>
                      <div className={styles.userDetails}>
                        <p className={styles.name}>{item.name}</p>
                        <h3 style={{ color: "tomato" }}>-</h3>
                        <p className={styles.date}>
                          {item.createdAt.split("T")[0]}
                        </p>
                      </div>
                      <div className={styles.blogDetails}>
                        <h3 className={styles.blogTitle}>{item.title}</h3>
                        <p className={styles.blogDescription}>
                          {parse(`
                            ${item.description}
                          `)}
                        </p>
                      </div>
                    </div>
                  </Link>
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
