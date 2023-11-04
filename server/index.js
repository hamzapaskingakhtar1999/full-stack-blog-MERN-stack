const express = require("express");
const app = express();

require("dotenv").config();

/* We only want to listen when connected to MongoDB. */
/* We do this later */

app.use(express.json());

const blogRoutes = require("./routes/BlogRoutes");
const { default: mongoose } = require("mongoose");
app.use("/api/blogs", blogRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected and Listening on PORT : ", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));
