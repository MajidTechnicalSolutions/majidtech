const express = require("express");
const router = express.Router();
const dummyData = require("../../dumyData");

router.route("/").get((req, res) => {
  res.send(dummyData.courses);
});

module.exports = router;
