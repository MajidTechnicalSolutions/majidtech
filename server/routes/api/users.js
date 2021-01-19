const { secret, refreshSecret } = require('../../envConfig');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// load validation functions
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// loading user model
const User = require('../../models/user');
const Tokens = require('../../models/tokens');

// @route POST api/users/register
// @desc register users
// @access Public
router.post('/register', (req, res) => {
  // form validation for register
  const { errors, isValid } = validateRegisterInput(req.body);
  // checking if user is valid and looking for them in database then adding then to database
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {
      // if no user then storing data from client to database
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash passwords before saving it to the data base
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) return console.log(err);
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/register
// @desc login user sign jwt token
// @access Public
router.post('/login', (req, res) => {
  // form validation for login
  const { errors, isValid } = validateLoginInput(req.body);
  // checking if user is valid and looking for them in database
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // store input email and password
  const email = req.body.email;
  const password = req.body.password;
  // look for user in database
  User.findOne({ email }).then((user) => {
    // check if user exist
    if (!user) {
      return res.status(404).json({ emailstatus: 'Email not found' });
    }
    // check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched create JWT payload
        const payload = {
          id: user.id,
          role: user.role,
        };
        // create refresh token
        const refreshToken = jwt.sign(payload, refreshSecret, {
          expiresIn: '1w',
        });
        // store it in Data base
        const newToken = new Tokens({
          token: refreshToken,
          isValid: true,
        });
        newToken.save((err, token) => {
          if (err) return console.log(err);
          console.log(`new token save and is valid is ${token.isValid}`);
        });
        // sign JWT
        jwt.sign(
          payload,
          secret,
          {
            expiresIn: '.5h',
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
              refreshToken,
            });
          }
        );
      } else {
        return res.status(400).json({ passwordStatus: 'Password Incorrect' });
      }
    });
  });
});

module.exports = router;
