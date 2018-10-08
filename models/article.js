const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String },
  date: { type: Date, default: Date.now }
});

const Savedarticle = mongoose.model("Savedarticle", articleSchema);

module.exports = Savedarticle;