const express = require("express");
const router = express.Router();

router.route("/").get(async (req, res) => {
  const key = process.env.REACT_APP_API_KEY;
  const options = {
    method: "GET",
  };

  const response = await fetch(
    `https://api.unsplash.com/collections/_7OuPnAqFt4/photos/?client_id=${key}`,
    options
  );

  let data = await response.json();
  res.json(data);
});

module.exports = router;
