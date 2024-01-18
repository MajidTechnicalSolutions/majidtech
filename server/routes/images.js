const express = require("express");
const router = express.Router();
const { secret } = require("../envConfig");

router.route("/").get(async (req, res) => {
  const options = {
    method: "GET",
  };

  const response = await fetch(
    `https://api.unsplash.com/collections/_7OuPnAqFt4/photos/?client_id=${secret}`,
    options
  );

  let data = await response.json();
  res.json(data);
});

module.exports = router;
