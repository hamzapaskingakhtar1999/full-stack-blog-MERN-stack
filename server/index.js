const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

/* Routes */
const blogRoutes = require("./routes/BlogRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");

const { default: mongoose } = require("mongoose");

/* Routes */
app.use("/api/blogs", blogRoutes);
app.use("/api/", authenticationRoutes);

/* We only want to listen when connected to MongoDB. */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected and Listening on PORT : ", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
