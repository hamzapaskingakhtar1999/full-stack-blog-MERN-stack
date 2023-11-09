const express = require("express");

const router = express.Router();

const {
  createComment,
  getComments,
} = require("../controllers/CommentController");

/* Create a comment */

router.post("/", createComment);
router.get("/", getComments);

module.exports = router;
