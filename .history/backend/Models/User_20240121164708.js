const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    profileImage: String,

    coverImage: String,

    about: String,

    livesIn: String,

    worksAt: String,

    relationStatus: String,

    followers: [], // id of the followers

    followings: [], // id of followings
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
