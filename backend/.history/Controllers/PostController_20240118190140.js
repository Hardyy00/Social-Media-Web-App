const Post = require("../Models/Post");
const User = require("../Models/User");
const mongoose = require("mongoose");
const { post } = require("../Routes/postRoutes");

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

    if (post.userId.toString() === user._id.toString()) {
      req.body.userId = user._id; // insert the actual object id in the post

      await post.updateOne({ $set: req.body });
      res.status(200).json({ message: "Post Updated" });
    } else {
      res.status(404).json({ message: "Action forbidden" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete a post
const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const post = await Post.findById(id);

    if (post.userId.toString() === userId) {
      await post.deleteOne();
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(400).json({ message: "Access Denied" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// like or dislike a post

const likePost = async (req, res) => {
  const { id } = req.params;

  const { userId } = req.body;

  try {
    const post = await Post.findById(id);

    const user = await User.findById(userId);

    if (!post.likes.includes(user._id)) {
      await post.updateOne({ $push: { likes: user._id } });

      res.status(200).json({ message: "Post liked" });
    } else {
      await post.updateOne({ $pull: { likes: user._id } });

      res.status(200).json({ message: "Post disliked" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get timeline posts

const getTimelinePosts = async (req, res) => {
  const { userId } = req.params;

  try {
    const currentUserPosts = await Post.find({ userId: userId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  likePost,
};
