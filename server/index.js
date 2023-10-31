import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.post("/register", (req, res) => {
  res.json("Working");
});

app.listen(4000);
