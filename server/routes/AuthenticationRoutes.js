const express = require("express");

const router = express.Router();

const {
  createUser,
  loginUser,
  getMe,
} = require("../controllers/AuthenticationController");

/* Register */

router.post("/register", createUser);

/* Login */
router.post("/login", loginUser);

/* Me */
router.get("/me", getMe);

/* Export */
module.exports = router;
