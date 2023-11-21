import React, { useEffect, useState } from "react";

import styles from "./comment.module.css";

import { useGetUserName } from "../../hooks/useGetUserName";

import axios from "axios";

import { useParams } from "react-router-dom";

const Comment = () => {
  const name = useGetUserName();

  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState();

  const params = useParams();
  const blogID = params.id;

  const handleSubmit = async (e) => {
    /* POST COMMENT */
    const response = await axios.post(
      "https://full-stack-blog-mern-stack.vercel.app/api/comments",
      {
        comment,
        name,
        blogID,
      }
    );
    setComment("");
    console.log(response);
  };

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(
        "https://full-stack-blog-mern-stack.vercel.app/api/comments"
      );
      setAllComment(response.data);
    };
    getComments();
  }, []);

  return (
    <div className={styles.comment}>
      <div className={styles.commentInputContainer}>
        <h1 style={{ color: "#40B3A2" }}>Comments</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Write a comment"
            className={styles.commentInput}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <hr />
          <div className={styles.commentInputBottom}>
            <p>- {name}</p>
            <button className="actionButton" type="submit">
              Add Comment
            </button>
          </div>
        </form>
      </div>
      {allComment ? (
        <div className={styles.commentDisplay}>
          {allComment
            .filter((item) => item.blogID === blogID)
            .map((item) => (
              <div className={styles.commentDisplayItem}>
                <p>{item.comment}</p>
                <div className={styles.commentDisplayBottom}>
                  <p>- {item.name}</p>
                </div>
                <hr />
              </div>
            ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Comment;
