const express = require("express");
const {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
  getTimelinePosts,
} = require("../Controllers/PostController");

const router = express.Router();

router.get("/:id", getPost);
router.post("/", createPost);

router.put("/:id", updatePost);
router.delete("/:id", deletePost);

router.patch("/:id", likePost);
router.get("/:id/timeline", getTimelinePosts);

module.exports = router;
