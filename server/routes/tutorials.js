const express = require("express");
const router = express.Router();
const dumydata = require("../dumydata.js");

router.route("/").get((req, res) => {
  res.send(dumydata.tutorials);
});

module.exports = router;
