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
        title: String,
        image: Buffer,
        hours: Number,
        lessons: Number,
        minutes: Number,
        disc: String,
      },
    ],
  },
});

module.exports = Course = mongoose.model("courses", CourseSchema);
