module.exports = function (express) {
  const router = express.Router();
  const movie = require("./models/cinemaModel");

  router.get("/ping", function (req, res) {
    res.send("Setup OK");
  });

  router.get("/movie/getDetails/:name", async function (req, res) {
    return await require("./handlers/getMovieDetails")(req, res);
  });

  router.post("/movie/addMovie", async function (req, res) {
    return await require("./handlers/addMovie")(req, res);
  });

  return router;
};
