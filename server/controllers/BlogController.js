const { default: mongoose } = require("mongoose");
const Blog = require("../models/BlogModels");

/* Get all blogs */
const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find({}).sort({ createdAt: -1 });
    res.json(blog);
  } catch (error) {
    console.log(error.message);
  }
};

/* Get Single Blog */

const getSingleBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such blog. This is the check of isValid" });
  }
  try {
    const blog = await Blog.findById(id);
    res.json(blog);

    if (!blog) {
      return res.status(404).json({ error: "No such blog" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* Create a Blog */

const createBlog = async (req, res) => {
  const { title, description, userID, userName, category } = req.body;
  try {
    const blog = await Blog.create({
      user: userID,
      title,
      description,
      name: userName,
      category,
    });
    res.json(blog);
  } catch (error) {
    console.log(error.message);
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such blog. This is the check of isValid" });
  }

  try {
    const blog = await Blog.findByIdAndUpdate(
      { _id: id },
      {
        title: "Title Updated",
        description: "Description Updated",
      }
    );
    res.json(blog);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: "No such blog. This is the check of isValid" });
  }

  try {
    const blog = await Blog.findByIdAndDelete(id);
    res.json({ message: "Deleted the item" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createBlog,
  getSingleBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
};
