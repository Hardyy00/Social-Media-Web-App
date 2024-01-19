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

    res.status(200).json({ message: "Post created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPost,
};
