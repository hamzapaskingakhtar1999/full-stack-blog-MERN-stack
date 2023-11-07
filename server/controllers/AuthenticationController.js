const mongoose = require("mongoose");

/* BCRYPT */
const bcrypt = require("bcryptjs");
const User = require("../models/UserModels");
const salt = bcrypt.genSaltSync(10);

/* JSON WEB TOKEN */
const jwt = require("jsonwebtoken");

// @desc Register New User
// @route POST /api/register
// @access Public

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  /* Checks */

  // 1. Fields not filled

  if (!name || !email || !password) {
    return res.status(400).json({ Message: "Fill all fields" });
  }

  try {
    const userExists = await User.findOne({ email });
    // 2. User already exists
    if (userExists) {
      res.status(400).json({ Message: "User already exists" });
    }
    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    }
  } catch (error) {
    res.status(400).json({ Message: "Some error during creation of account" });
  }
};

// @desc Authenticate User
// @route POST /api/login
// @access Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    /* Check for user email */
    const user = await User.findOne({ email });
    /* Is the user registered */
    if (!user) {
      return res.json({ message: "User not registered" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    /* Is the password correct */
    if (!isPasswordValid) {
      return res.json({ message: "Password is invalid" });
    }

    /* JWT */
    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id, email: user.email, name: user.name });
  } catch (error) {
    res.status(400).json({ Message: "Invalid Password" });
  }
};

// @desc Get User Data
// @route GET /api/me
// @access Private

const getMe = async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({ id: _id, name, email });
};

module.exports = { createUser, loginUser, getMe };
