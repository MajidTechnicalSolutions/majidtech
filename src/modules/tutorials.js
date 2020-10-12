const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating mongoose schema for site content
const TutorialSchema = new Schema({
  tutorials: {
    options: [{ id: { type: Number, default: Date.now() }, category: String }],
    tutorials: [
      {
        id: Date.Now(),
        title: {
          type: String,
          required: true,
        },
        image: Buffer,
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

module.exports = Tutorial = mongoose.model("tutorials", TutorialSchema);
