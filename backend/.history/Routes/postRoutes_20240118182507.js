const express = require("express");
const {
  createPost,
  getPost,
  updatePost,
} = require("../Controllers/PostController");

const router = express.Router();

router.get("/:id", getPost);
router.post("/", createPost);

router.patch("/:id", updatePost);

module.exports = router;
