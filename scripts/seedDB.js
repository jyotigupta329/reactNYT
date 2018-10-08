const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
class SeedData {

  constructor() {
    const that = this;
    mongoose.connect(
      process.env.MONGODB_URI ||
      "mongodb://localhost/reactarticlelist"
      , function (err) {
        if (err) {
          throw err;
        } else {
          console.log('DB conneted successfully');
        }
      });
  }
}

module.exports = new SeedData();





