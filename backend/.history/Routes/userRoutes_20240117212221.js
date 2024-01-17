const express = require("express");
const getUser = req;

const router = express.Router();

router.get("/:id", (req, res) => {
  res.json("hiii");
});

module.exports = router;
