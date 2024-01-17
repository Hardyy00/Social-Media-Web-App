const User = require("../Models/User");

const registerUser = (req,res)=>{

    const {username,password,firstName,lastName} = req.body;

    const newUser = new User({username,password,firstName,lastName});

    try{
        await newUser.save();
        
    } catch (err){


    }
}


module.exports = 