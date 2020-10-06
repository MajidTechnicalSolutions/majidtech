// require mongo and get schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a scheema for MongoDB
const UserSchema = new Schema({
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
