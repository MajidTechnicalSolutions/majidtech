// require mongo and get schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create a scheema for MongoDB
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now(),
  },
  favTutorials: [
    {
      id: Number,
      title: String,
      image: Buffer,
      desc: String,
      notes: [String],
    },
  ],
  favCourses: [
    {
      id: Number,
      title: String,
      image: Buffer,
      hours: Number,
      lessons: Number,
      minutes: Number,
      desc: String,
      notes: [String],
    },
  ],
});

module.exports = User = mongoose.model("users", UserSchema);
