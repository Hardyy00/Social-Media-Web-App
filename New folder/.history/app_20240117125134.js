const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://hardikgaur8901:TTpp06ZGC0odx6Lu@cluster0.bgjrdd5.mongodb.net/noonwretryWrites=true&w=majority"
  )
  .then(() => {
    console.log("first");
  });

// db.on("error", () => {
//   console.log("error");
// });
// db.once("open", () => {
//   console.log("success conntected");
// });

app.listen(8080, () => [console.log("success")]);
