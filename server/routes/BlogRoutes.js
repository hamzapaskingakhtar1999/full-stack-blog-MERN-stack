const express = require("express");

const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

/* Get all Blogs */
router.get("/", getAllBlogs);

/* Get a single blog */
router.get("/:id", getSingleBlog);

router.post("/", createBlog);

/* Update a blog */
router.patch("/:id", updateBlog);

/* Delete a blog */
router.delete("/:id", deleteBlog);

module.exports = router;
