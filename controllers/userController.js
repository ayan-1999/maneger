const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcypt = require("bcrypt");
//@desc Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  const hashedPassword = await bcypt.hash(password, 10);
  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });
  console.log("user created", user);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data not valid");
  }
  res.json("register");
});

//@desc Login User
//@route POST /api/users/login
//@access public
const logInUser = asyncHandler(async (req, res) => {
  res.json({ message: "login" });
});

//@desc Current user info
//@route POST /api/users/current
//@access Private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current" });
});

module.exports = { registerUser, logInUser, currentUser };
