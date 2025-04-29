const express = require("express");
const {
  registerUser,
  logInUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", logInUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
