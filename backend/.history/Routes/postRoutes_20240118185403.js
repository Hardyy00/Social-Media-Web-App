const express = require("express");
const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
} = require("../Controllers/PostController");

const router = express.Router();

router.get("/:id", getPost);
router.post("/", createPost);

router.put("/:id", updatePost);
router.delete("/:id", deletePost);

router.put();

module.exports = router;
