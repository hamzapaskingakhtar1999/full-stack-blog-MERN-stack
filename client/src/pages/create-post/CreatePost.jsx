import React, { useState } from "react";

import styles from "./createpost.module.css";

import { useGetUserID } from "../../hooks/useGetUserID";
import { useGetUserName } from "../../hooks/useGetUserName";

import { useCookies } from "react-cookie";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Login from "../login/Login";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");

  const [value, setValue] = useState("");

  const userID = useGetUserID();
  const userName = useGetUserName();

  const [cookies, setCookies] = useCookies(["access_token"]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, description, userID, userName, category };

    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setError(null);
      console.log("New Blog has been added", json);
    }
  };

  return (
    <div>
      {!cookies.access_token ? (
        <Login />
      ) : (
        <div className="center">
          <h1
            style={{
              textAlign: "center",
              margin: "20px 0",
              color: "tomato",
            }}
          >
            Create Post
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
              className={styles.blogTitle}
              placeholder="Title of Blog..."
            />
            <div className={styles.descriptionContainer}>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className={styles.quillContainer}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <select
                onChange={(event) => setCategory(event.target.value)}
                defaultValue=""
                required
                className={styles.select}
              >
                <option value="" disabled selected hidden>
                  Select Category
                </option>
                <option value="Technology" className={styles.option}>
                  Technology
                </option>
                <option value="Food" className={styles.option}>
                  Food
                </option>
                <option value="Travel" className={styles.option}>
                  Travel
                </option>
              </select>
              <button type="submit" className="actionButton">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
