const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://vshalsha1234:12345adt@cluster0.zrinxif.mongodb.net/hotelretryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("error");
});
db.once("open", () => {
  console.log("success conntected");
});

app.listen(8080, () => [console.log("success")]);
