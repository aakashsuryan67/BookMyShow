const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  region: {
    type: String,
  },
  address: {
    typr: String,
  },
});

module.exports = mongoose.model("cinema", cinemaSchema);
