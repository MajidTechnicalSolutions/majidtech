const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

router.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) return res.sendStatus(401);
  User.findOne({ refreshToken: refreshToken })
    .then((user) => {
      if (user.auth === false) return res.sendStatus(403);
      jwt.varify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
          { id: user.id },
          process.env.REFRESH_SECRET
        );
        res.json({ accessToken });
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err: err });
    });
});

router.delete("/logout", (req, res) => {});

module.exports = router;
