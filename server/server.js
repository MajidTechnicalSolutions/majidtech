// access dontenv file for protected data
const { db, port } = require("./envConfig");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const blog = require("./routes/blog");
const images = require("./routes/images");
const courses = require("./routes/courses");
const tutorials = require("./routes/tutorials");
const tokens = require("./routes/token");
const users = require("./routes/users");
const passport = require("passport");
const passportConfig = require("./config/passport");
// initializing app
const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// passport middleware
// app.use(passport.initialize());

// passport config
// passportConfig(passport);

// connect to mongodb data base
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('MongoDB successfully connected');
//   })
//   .catch((err) => console.log(err));

// handling routes
app.get("/", (req, res) => {
  res.send("Welcome to majidtech");
});

// middleware handling routes from these files
app.use("/api/courses", courses);
app.use("/api/tutorials", tutorials);
app.use("/api/users", users);
app.use("/api/tokens", tokens);
app.use("/api/blog", blog);
app.use("/api/images", images);
// creating port for server

// Listening to that port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
