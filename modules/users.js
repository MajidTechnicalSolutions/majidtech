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
  datJoined: {
    type: Date,
    default: Date.now(),
  },
  favTutorials: [
    {
      id: Number,
      title: String,
      image: Buffer,
      disc: String,
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
      disc: String,
      notes: [String],
    },
  ],
});
