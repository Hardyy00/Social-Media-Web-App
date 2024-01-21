const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes");
const userRoutes = require("./Routes/userRoutes");
const postRoutes = require("./Routes/postRoutes");
const cors = require("cors");
const path = require("path");
const uploadRoutes = require("./Routes/uploadRoutes");

dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/social-media-app")
  .then(() => {
    console.log("DB Connected");

    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Server connected");
      }
    });
  })
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "public")));

app.use("/images", express.static("images"));

app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/upload", uploadRoutes);
