const Post = require("../Models/Post");
const User = require("../Models/User");
const mongoose = require("mongoose");
const { post } = require("../Routes/postRoutes");

// make a new post

const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();

    res.status(200).json(newPost);
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

    if (post.userId === userId) {
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

    if (post.userId === userId) {
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

    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } }, { new: true });
      console.log(post);

      res.status(200).json(newPost);
    } else {
      const changedPost = await post.updateOne(
        { $pull: { likes: userId } },
        { new: true }
      );

      res.status(200).json(changedPost);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// get timeline posts

const getTimelinePosts = async (req, res) => {
  const { id: userId } = req.params;

  try {
    const currentUserPosts = await Post.find({
      userId: userId,
    });

    const user = await User.findById(userId);

    for (let followingId of user.followings) {
      const post = await Post.find({ userId: followingId });
      currentUserPosts.push(...post);
    }

    // const followingPosts = await User.aggregate([
    //   {
    //     $match: {
    //       _id: new mongoose.Types.ObjectId(userId), // find the current user
    //     },
    //   },

    //   {
    //     $lookup: {
    //       from: "posts", // from where the lookup is to be done
    //       localField: "followings", // from where the matching object is to be taken
    //       foreignField: "userId", // field in the other db to match
    //       as: "followingPosts ", //result as
    //     },
    //   },

    //   {
    //     $project: {
    //       followingPosts: 1,
    //       _id: 0,
    //     },
    //   },
    // ]);

    currentUserPosts.sort((a, b) => b.createdAt - a.createdAt); /// sort from most recent to old

    res.status(200).json(currentUserPosts);
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
  getTimelinePosts,
};
