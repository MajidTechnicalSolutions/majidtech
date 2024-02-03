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

// {
//     "_id": {
//       "$oid": "65bdd3fef91468a47cd039c0"
//     },
//     "title": "12.08.22 — Why you should not forget wireframes",
//     "tags": [
//       "twitter",
//       "Wireframes"
//     ],
//     "date": "12.08.22",
//     "desc": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec non ante neque. Aliquam auctor, tortor eu eleifend scelerisque, quam purus pretium neque, nec tristique ex lacus pharetra."
//   }
