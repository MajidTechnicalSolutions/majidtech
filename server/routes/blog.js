const express = require("express");
const router = express.Router();
const Blogpost = require("../models/blog");

router.route("/").get((req, res) => {
  Blogpost.find()
    .then((post) => console.log(post))
    .catch((err) => console.log(err, "error in requesting blog data"));
});

module.exports = router;
