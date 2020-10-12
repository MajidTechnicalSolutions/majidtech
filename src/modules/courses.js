// importing mongoos and makeing schema var
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating mongoose schema for site content
const CourseSchema = new Schema({
  courses: {
    options: [{ id: { type: Number, default: Date.now() }, category: String }],
    courses: [
      {
        id: Date.Now(),
        title: {
          type: String,
          required: true,
        },
        image: Buffer,
        hours: Number,
        lessons: Number,
        minutes: Number,
        disc: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
});

module.exports = Course = mongoose.model("courses", CourseSchema);
