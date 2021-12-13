const movieModel = require("./../models/movieModel");
const cinemaModel = require("./../models/cinemaModel");

module.exports = async function (req, res) {
  const name = req.params.name;
  const movieDetails = await movieModel.findOne({ name });

  const resp = {
    movieName: name,
    cinemaDetails: [],
  };

  for (let ele of movieDetails.cinemas) {
    if (ele.seatingCapacity <= ele.reserved) {
      continue;
    }
    const cinema = await cinemaModel.findOne({ _id: ele.cinemaId });
    resp.cinemaDetails.push({
      cinemaName: cinema.name,
      cinemaAddress: cinema.address,
      showTime: ele.date,
      duration: ele.duration,
    });
  }
  return res.json(resp);
};
