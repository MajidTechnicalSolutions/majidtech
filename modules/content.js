const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentSchema = new Schema({
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
  tutorials: {
    options: [{ id: { type: Number, default: Date.now() }, category: String }],
    tutorials: [
      {
        id: Date.Now(),
        title: String,
        image: Buffer,
        disc: String,
      },
    ],
  },
});
