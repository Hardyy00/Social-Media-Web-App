const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.json("hiii");
});

module.exports = router;
