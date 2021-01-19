// access dontenv file for protected data
const { db, port } = require('./envConfig');
// requires
const express = require('express');
const mongoose = require('mongoose');
const courses = require('./routes/api/courses');
const tutorials = require('./routes/api/tutorials');
const tokens = require('./routes/api/token');
const users = require('./routes/api/users');
const passport = require('passport');
const passportConfig = require('./config/passport');
// initializing app
const app = express();

// using express body parser middleware to parse req data from a stream to json

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

// passport middleware
app.use(passport.initialize());

// passport config
passportConfig(passport);

// connect to mongodb data base
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB successully connected');
  })
  .catch((err) => console.log(err));
// handling routes
app.get('/', (req, res) => {
  res.send('Weclome to majidtech');
});
// middleware handling routes from these files
app.use('/api/courses', courses);
app.use('/api/tutorials', tutorials);
app.use('/api/users', users);
app.use('/api/tokens', tokens);
// creating port for server

//listinig to that port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
