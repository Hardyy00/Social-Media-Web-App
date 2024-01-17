const User = require("../Models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  const salt = await bcrypt.genSalt(10); // generate the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
    firstName,
    lastName,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {

    const {username,password}  = req.body;

    try{
        const user= await User.findOne({username});

        if(user){
            const validity = await bcrypt(passowrd,)
        }
    }
};

module.exports = {
  registerUser,
  loginUser,
};
