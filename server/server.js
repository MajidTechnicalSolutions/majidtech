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
const contact = require("./routes/contact");
const passport = require("passport");
const passportConfig = require("./config/passport");
// initializing app
const app = express();

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'http://localhost:3002',
    'https://majidtech-35d0c5c21559.herokuapp.com',
    'https://majidtech.com',
    'https://www.majidtech.com'
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
// passport middleware
app.use(passport.initialize());

// passport config
passportConfig(passport);

// connect to mongodb data base
mongoose
  .connect(db, {
    dbName: "majid-tech",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB successfully connected");
  })
  .catch((err) => console.log(err));

// handling routes
app.get("/", (req, res) => {
  res.send("Welcome to majidtech");
});

// middleware handling routes from these files
app.use("/courses", courses);
app.use("/tutorials", tutorials);
app.use("/users", users);
app.use("/tokens", tokens);
app.use("/blog", blog);
app.use("/images", images);
app.use("/contact", contact);
// creating port for server

// Listening to that port
const serverPort = port || 5001; // Use 5001 as fallback since 5000 is taken by Mac system
app.listen(serverPort, () => {
  console.log(`Server started on port ${serverPort}`);
});
