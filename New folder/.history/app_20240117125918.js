const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://hardikgaur8901:12345adt@cluster0.krouhca.mongodb.net/hardhikretryWrites=true&w=majority"
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
