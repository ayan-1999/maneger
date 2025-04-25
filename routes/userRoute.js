const express = require("express");
const {
  registerUser,
  logInUser,
  currentUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", logInUser);

router.get("/current", currentUser);

module.exports = router;
