const Post = require("../Models/Post");
const User = require("../Models/User");
const mongoose = require("mongoose");

// make a new post

const createPost = async (req, res) => {
  const { userId } = req.body;
  try {
    let user = await User.findById(userId);
    req.body.userId = user._id;

    const newPost = new Post(req.body);
    await newPost.save();

    res.status(200).json({ message: "Post created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get a post
const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// update a post

const updatePost = async (req, res) => {
  const { id: postId } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(postId);
    const user = await User.findById(userId);

    console.log(post.userId, user._id);

    if (post.userId === user._id) {
      req.body.userId = user._id;

      await post.updateOne({ $set: req.body });
      res.status(200).json({ message: "Post Updated" });
    } else {
      res.status(404).json({ message: "Action forbidden" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPost,
  getPost,
  updatePost,
};
