import React, { useState } from "react";

import styles from "./createpost.module.css";

import axios from "axios";

import { useGetUserID } from "../../hooks/useGetUserID";
import { useGetUserName } from "../../hooks/useGetUserName";

import { useCookies } from "react-cookie";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Login from "../login/Login";

import { AiOutlineUpload } from "react-icons/ai";

import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { v4 } from "uuid";

import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");

  const [isUploading, setIsUploading] = useState(false);

  const [url, setUrl] = useState("");

  const userID = useGetUserID();
  const userName = useGetUserName();

  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleFirebaseFile = async (e) => {
    const selectedFile = e.target.files[0];
    setIsUploading(true);
    if (selectedFile) {
      /* FIrebase */
      const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);

      const uploadTask = await uploadBytesResumable(imageRef, selectedFile);

      const downloadURL = await getDownloadURL(imageRef);

      console.log("Download URL:", downloadURL);
      setUrl(downloadURL);
      while (!downloadURL) {
        setIsUploading(true);
      }
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /* Check if description empty since required doesn't work with Quill */
    if (description === "") {
      alert("Please Add a Blog description");
      return;
    }
    if (url !== "") {
      const response = await axios.post(
        "https://full-stack-blog-mern-stack.vercel.app/api/blogs",
        {
          title,
          description,
          userID,
          userName,
          category,
          url,
        }
      );
      console.log(response);
      if (response.statusText !== "OK") {
        alert("Some issue creating post. Try again later.");
      }
      if (response.statusText === "OK") {
        setTitle("");
        setDescription("");
        setError(null);
        navigate("/");
      }
    }

    /* THIS IS FOR THE IMAGE PART */
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
              className={styles.blogTitle}
              placeholder="Title of Blog..."
              required
            />
            <div className={styles.descriptionContainer}>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                className={styles.quillContainer}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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

              <div style={{ position: "relative" }}>
                <label
                  htmlFor="file"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <AiOutlineUpload size={25} />
                  Select a thumbnail
                </label>
                <input
                  type="file"
                  // onChange={(e) => setImage(e.target.files[0])}
                  onChange={handleFirebaseFile}
                  id="file"
                  className={styles.hide}
                  required
                />
              </div>
            </div>
            {isUploading && <p>Uploading your file. Please wait...</p>}
            {!isUploading && (
              <button
                type="submit"
                className="actionButton"
                style={{ margin: "20px 0" }}
              >
                Submit
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
