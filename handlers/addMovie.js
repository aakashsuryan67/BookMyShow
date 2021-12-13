const movieModel = require("./../models/movieModel");

module.exports = async function (req, res) {
  const name = req.body.name;
  console.log(req.body);
  const doc = {
    cinemaId: req.body.id,
    date: req.body.date,
    duration: req.body.duration,
    seatingCapacity: req.body.seatingCapacity,
    reserved: 0,
  };
  try {
    await movieModel.updateOne(
      { name },
      { $push: { cinemas: doc } },
      { upsert: true }
    );
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: "INTERNAL_ERROR",
    });
  }

  return res.status(200).end();
};
