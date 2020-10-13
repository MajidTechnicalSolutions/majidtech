const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// load validation functions
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// loading user model
const User = require("../../models/user");

// @route POST api/users/register
// @desc register users
// @access Public
router.post("/register", (req, res) => {
  // form validation for register
  const { errors, isValid } = validateRegisterInput(req.body);
  // checking if user is valid and looking for them in database then adding then to database
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      // if no user then storing data from client to database
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash passwords before saving it to the data base
      const salt = bcrypt.genSalt();
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    }
  });
});

// @route POST api/users/register
// @desc login user return jwt token
// @access Public
router.post("/login", (req, res) => {
  // form validation for login
  const { errors, isValid } = validateLoginInput(req.body);
  // checking if user is valid and looking for them in database
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // look for user in database
});

module.exports = router;
