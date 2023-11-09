import React, { useEffect, useState } from "react";

import styles from "./comment.module.css";

import { useGetUserName } from "../../hooks/useGetUserName";

import axios from "axios";

const Comment = () => {
  const name = useGetUserName();

  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* POST COMMENT */
    const response = await axios.post("/api/comments", { comment, name });
    setComment("");
  };

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get("/api/comments");
      console.log(response.data, "Comments");
      setAllComment(response.data);
    };
    getComments();
  }, []);

  return (
    <div className={styles.comment}>
      <div className={styles.commentInputContainer}>
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
      <div className={styles.commentDisplay}>
        {allComment &&
          allComment.map((item) => (
            <div className={styles.commentDisplayItem}>
              <p>{item.comment}</p>
              <div className={styles.commentDisplayBottom}>
                <p>- {item.name}</p>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comment;
