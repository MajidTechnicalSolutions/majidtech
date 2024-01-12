const express = require("express");
const router = express.Router();
const data = require("../../dumyData");

router.route("/").get((req, res) => {
  res.send(data.blogPost);
});

module.exports = router;
