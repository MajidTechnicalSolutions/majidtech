const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const courses = require("./routes/api/courses");
const tutorials = require("./routes/api/tutorials");
const users = require("./routes/api/users");

// access dontenv file for protected data
require("dotenv").config({ path: __dirname + "/config/.env" });

// initializing app
const app = express();
// using body parser middleware to parse req data to json and not stream
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());
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
app.use("/courses", courses);
app.use("/tutorials", tutorials);
app.use("/users", users);

// creating port for server
const port = process.env.PORT || 5000;

//listinig to that port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
