// The Majid Tech API (Heroku). It serves the website's blog: the posts from
// MongoDB (/blog) and the pictures from an Unsplash collection (/images). The
// website reaches it through /blog-api on its own domain (client/next.config.mjs).
const { db, port } = require("./envConfig");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blog = require("./routes/blog");
const images = require("./routes/images");

const app = express();

// The website calls through its own /blog-api proxy, so this list only matters
// for browsers calling the API directly (local development and the old domain).
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
      "https://majidtech-35d0c5c21559.herokuapp.com",
      "https://majidtech.com",
      "https://www.majidtech.com",
    ],
    methods: ["GET", "OPTIONS"],
    optionsSuccessStatus: 200,
  })
);

mongoose
  .connect(db, { dbName: "majid-tech" })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to majidtech");
});

app.use("/blog", blog);
app.use("/images", images);

// 5001 locally, since macOS uses 5000.
const serverPort = port || 5001;
app.listen(serverPort, () => {
  console.log(`Server started on port ${serverPort}`);
});
