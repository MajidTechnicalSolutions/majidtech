const express = require("express");
const router = express.Router();
const data = require("../dumydata");

router.route("/").get((req, res) => {
  res.send(data.courses);
});

module.exports = router;
