const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("first");
});

db.on("error", () => {
  console.log("error");
});
db.once("open", () => {
  console.log("success conntected");
});

app.listen(8080, () => [console.log("success")]);
