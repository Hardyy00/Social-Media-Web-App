const express = require("express");
const getUser = require("../Controllers/UserController");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.json("hiii");
});

module.exports = router;
