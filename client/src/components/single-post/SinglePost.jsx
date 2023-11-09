import React, { useState, useEffect } from "react";

import styles from "./singlepost.module.css";

import { useParams } from "react-router-dom";

import { useGetUserID } from "../../hooks/useGetUserID";
import { AiFillDelete } from "react-icons/ai";
import ReactQuill from "react-quill";
import Comment from "../comment/Comment";

import { useNavigate } from "react-router-dom";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  let params = useParams();
  const user = useGetUserID();

  const navigate = useNavigate();

  /* Delete */
  const handleDelete = async (item) => {
    const response = await fetch("/api/blogs/" + item._id, {
      method: "DELETE",
    });
    navigate("/");
  };

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
              src={post.imageUrl}
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          {user === post.user ? (
            <AiFillDelete
              onClick={() => handleDelete(post)}
              className={styles.deleteIcon}
            />
          ) : (
            ""
          )}
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
          <ReactQuill
            theme={"bubble"}
            value={post.description}
            className={styles.quillContainer}
            readOnly={true}
          />
          <Comment />
        </div>
      )}
    </div>
  );
};

export default SinglePost;
