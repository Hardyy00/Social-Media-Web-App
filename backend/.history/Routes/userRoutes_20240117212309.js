const express = require("express");
const getUser = require("../Controllers/UserController");

const router = express.Router();

router.get("/:id", getUser);

module.exports = router;
