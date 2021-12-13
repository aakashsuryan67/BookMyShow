const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  cinemaId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    type: Date,
  },
  duration: {
    type: Number, // in minutes
  },
  seatingCapacity: {
    type: Number,
  },
  reserved: {
    type: Number,
  },
});

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  cinemas: [cinemaSchema],
});

movieSchema.index({ name: 1 }, { unique: 1 });

module.exports = mongoose.model("movie", movieSchema);
