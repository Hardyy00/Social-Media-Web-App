const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://hardikgaur8901:hardikgaur8901@cluster0.kkryvep.mongodb.net/"
  )
  .then(() =>
    app.listen(8080, () => {
      console.log("DB connected");
    })
  );

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
