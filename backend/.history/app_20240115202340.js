const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const bodyParser = bodyParser();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://hardikgaur8901:<password>@cluster0.kkryvep.mongodb.net/"
);

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen(8080);
