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
  // 1. User already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.json({
      message: "User already exists. Try logging in instead.",
    });
  }

  try {
    const user = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    if (user) {
      return res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        message: "User Created",
      });
    }
  } catch (error) {
    res.status(400).json({ message: "Some error during creation of account" });
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
    res.json({
      token,
      userID: user._id,
      email: user.email,
      name: user.name,
      message: "",
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Problem Logging in. Please try again later" });
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
