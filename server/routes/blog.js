const express = require("express");
const router = express.Router();
const data = require("../dumyData");
const Blogpost = require("../models/blog");

// console.log(Blogpost);
async function testRun() {
  Blogpost;
  await Blogpost.find()
    .then((post) => console.log(post))
    .catch((err) => console.log(err));
}

testRun();
router.route("/").get((req, res) => {
  res.send(data.blogPost);
});

module.exports = router;
