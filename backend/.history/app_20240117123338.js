const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");

dotenv.config();

mongoose.connect(process.env.MONGO_DB);
let db = mongoose.connection;

db.on("error", function () {
  console.log("first");
});
db.once("open", function () {
  console.log("connected");
});

// mongoose.connect(process.env.MONGO_DB).then(() => console.log("Connected"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/auth", authRoutes);

// app.listen(process.env.PORT, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(process.env.PORT, process.env.MONGO_DB);
//   }
// });
app.listen(4000, function () {
  console.log("success");
});
