const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const bodyParser = bodyParser();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://hardikgaur8901:hardikgaur8901@cluster0.kkryvep.mongodb.net/Social_Media_App"
).then(()=> app.listen(8080); );

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


