const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/ball");

const db = mongoose.connection;

db.on("error", () => {
  console.log("error");
});
db.once("open", () => {
  console.log("success conntected");
});

app.listen(8080, () => [console.log("success")]);
