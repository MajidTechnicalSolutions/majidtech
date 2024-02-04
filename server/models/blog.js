// importing mongoos and makeing schema var
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating mongoose schema for site content
const BlogSchema = new Schema({
  id: {
    type: mongoose.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  tags: [String],
  date: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});
module.exports = Blogpost = mongoose.model("Blogpost", BlogSchema);
