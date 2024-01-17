const express = require("express");
const router = express.Router();
const authController = require("../Controllers/AuthController");

router.post("/register", registerUser);

module.exports = router;
