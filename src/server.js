const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

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
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB successully connected");
  })
  .catch((err) => console.log(err));

// creating port for server
const port = process.env.PORT || 5000;

//listinig to that port
app.listen(port, () => {
  console.log(`Server started on port${port}`);
});
