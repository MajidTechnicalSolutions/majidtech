const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokensSchema = new Schema({
  token: String,
  isValid: {
    type: Boolean,
    required: true,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Tokens = mongoose.model("tokens", TokensSchema);
