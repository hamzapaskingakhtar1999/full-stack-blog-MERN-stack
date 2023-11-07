import React, { useState, useEffect } from "react";

import styles from "./singlepost.module.css";

import { useParams } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  let params = useParams();
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs/${params.id}`);
      const json = await response.json();
      setPost(json);
    };
    fetchBlog();
  }, []);
  return (
    <div className="center">
      {post && (
        <div className={styles.singlePost}>
          <div className={styles.postImage}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7bVBBx_reF-Ql4dPp1W8eluTMkedxPSAon1ExCv3gU3Sy0I_E0QXMV-rVQSBZHsY-Wk&usqp=CAU"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className={styles.authorInfo}>
            <p>
              <strong>Written By: </strong>
              {post.name}
            </p>
            <p>
              <strong>Created At: </strong>
              {post.createdAt.split("T")[0]}
            </p>
          </div>
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>
            {post.title}
          </h2>
          <p>{post.description}</p>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
