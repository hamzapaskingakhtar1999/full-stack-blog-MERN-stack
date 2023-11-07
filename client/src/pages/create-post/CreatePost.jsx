import React, { useState } from "react";

import { useGetUserID } from "../../hooks/useGetUserID";
import { useGetUserName } from "../../hooks/useGetUserName";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");

  const userID = useGetUserID();
  const userName = useGetUserName();

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
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <select
          onChange={(event) => setCategory(event.target.value)}
          defaultValue=""
          required
        >
          <option value="" disabled selected hidden>
            Select Category
          </option>
          <option value="Technology">Technology</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
