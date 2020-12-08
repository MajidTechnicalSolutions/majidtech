const express = require("express");
const router = express.Router();
const dumydata = require("../../dumydata");

router.route("/").get((req, res) => {
  res.send(dumydata.courses);
});

module.exports = router;
