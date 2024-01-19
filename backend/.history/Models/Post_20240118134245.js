const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },

  desc: String,
  likes: [],
});
