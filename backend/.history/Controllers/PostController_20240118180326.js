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
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  const { userId } = req.body;
};
