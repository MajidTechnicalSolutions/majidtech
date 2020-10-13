const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating mongoose schema for site content
const TutorialSchema = new Schema({
  tutorials: {
    options: [{ id: { type: Number, default: Date.now() }, category: String }],
    tutorials: [
      {
        id: { type: Number, default: Date.now() },
        tags: [String],
        title: {
          type: String,
          required: true,
        },
        image: Buffer,
        desc: {
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

module.exports = Tutorial = mongoose.model("tutorials", TutorialSchema);
