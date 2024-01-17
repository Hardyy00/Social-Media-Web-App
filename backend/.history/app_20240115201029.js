const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const bodyParser = bodyParser();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/social_media");

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen(8080);
