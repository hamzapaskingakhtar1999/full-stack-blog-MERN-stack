const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

/* Routes */
const blogRoutes = require("./routes/BlogRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const commentRoutes = require("./routes/CommentRoutes");

const { default: mongoose } = require("mongoose");

/* Routes */
app.use("/api/blogs", blogRoutes);
app.use("/api/", authenticationRoutes);
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
