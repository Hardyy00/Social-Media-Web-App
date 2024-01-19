const express = require("express");
const { createPost, getPost } = require("../Controllers/PostController");

const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);

module.exports = router;
