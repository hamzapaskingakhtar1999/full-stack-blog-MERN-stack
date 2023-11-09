const Comment = require("../models/CommentModel");

const createComment = async (req, res) => {
  const { comment, name, blogID } = req.body;
  try {
    const response = await Comment.create({ comment, name, blogID });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createComment, getComments };
