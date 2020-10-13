const express = require("express");
const mongoose = require("mongoose");
const courses = require("./routes/api/courses");
const tutorials = require("./routes/api/tutorials");
const users = require("./routes/api/users");

// access dontenv file for protected data
require("dotenv").config({ path: __dirname + "/.env" });

// initializing app
const app = express();

// using express body parser middleware to parse req data from a stream to json

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

// connect to mongodb data base
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB successully connected");
  })
  .catch((err) => console.log(err));
// handling routes
app.get("/", (req, res) => {
  res.send("Weclome to majidtech");
});
// middleware handling routes form these files
app.use("/api/courses", courses);
app.use("/api/tutorials", tutorials);
app.use("/api/users", users);

// creating port for server
const port = process.env.PORT || 5000;

//listinig to that port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
