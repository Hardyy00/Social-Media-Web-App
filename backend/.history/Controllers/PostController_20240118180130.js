const Post = require("../Models/Post");
const User = require('../Models/User');
const mongoose = require("mongoose");

// make a new post

const createPost = async (req, res) => {

    const {userId } = req.body;  
    try{

        let user = await User.findById(id);
    }
  const { userId } = req.body;
};
