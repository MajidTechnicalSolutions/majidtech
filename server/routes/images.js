const express = require("express");
const router = express.Router();
const { secret } = require("../envConfig");

// The blog's pictures, from an Unsplash collection. A failed or slow Unsplash
// call answers with an error instead of taking the whole server down.
router.route("/").get(async (req, res) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/collections/_7OuPnAqFt4/photos/?client_id=${secret}`,
      { signal: AbortSignal.timeout(10000) }
    );
    if (!response.ok) throw new Error(`Unsplash answered ${response.status}`);
    res.json(await response.json());
  } catch (err) {
    console.log(err, "error in requesting blog images");
    res.status(502).json({ message: "Could not load the blog images" });
  }
});

module.exports = router;
