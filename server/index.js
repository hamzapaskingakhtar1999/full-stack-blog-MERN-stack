const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());

/* Routes */
const blogRoutes = require("./routes/BlogRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const commentRoutes = require("./routes/CommentRoutes");

const { default: mongoose } = require("mongoose");

/* Blog Routes */
app.use("/api/blogs", blogRoutes);
/* Authentication Routes */
app.use("/api/", authenticationRoutes);
/* Comment Routes */
app.use("/api/comments", commentRoutes);

/* We only want to listen when connected to MongoDB. */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected and Listening on PORT : ", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
