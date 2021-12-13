const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes")(express);
const bodyParser = require("body-parser");
const port = 3000;

const DbUrl = "mongodb://localhost:27017/BMS";
mongoose.connect(DbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

app.listen(port, function () {
  console.log(`Server is running on port: ${port}`);
});
