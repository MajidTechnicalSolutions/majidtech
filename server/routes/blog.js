const express = require("express");
const router = express.Router();
const Blogpost = require("../models/blog");

router.route("/").get((req, res) => {
  Blogpost.find()
    .then((posts) => res.send(posts))
    .catch((err) => {
      console.log(err, "error in requesting blog data");
      res.status(500).json({ message: "Could not load the blog" });
    });
});

module.exports = router;
