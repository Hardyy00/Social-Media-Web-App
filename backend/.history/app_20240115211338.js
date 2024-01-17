const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config;

mongoose
  .connect(
    "mongodb+srv://Hardiik:hard@cluster0.kkryvep.mongodb.net/Social_Media_App?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(8080, () => {
      console.log("DB connected");
    })
  )
  .catch((err) => console.log(err));

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
