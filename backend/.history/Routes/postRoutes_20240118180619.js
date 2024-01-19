const express = require("express");
const createPost = require("../Controllers/PostController");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "NO" });
});

module.exports = router;
