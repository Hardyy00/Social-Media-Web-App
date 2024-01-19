const express = require("express");
const { createPost } = require("../Controllers/PostController");

const router = express.Router();

router.get("/");
router.post("/", createPost);

module.exports = router;
