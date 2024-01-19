const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10); // generate the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  req.body.password = hashedPassword;

  const newUser = new User(req.body);

  try {
    const oldUser = await User.findOne({ username });
    console.log(oldUser);

    if (oldUser) {
      return res.status(400).json({ message: "User is already registered" });
    }
    const user = await newUser.save();

    const token = jwt.sign(
      {
        username: user.username,
        id: user._id,
      },
      process.env.secretKey,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      //  password and original password
      const validity = await bcrypt.compare(password, user.password);

      if (validity) {
      } else {
        res.status(400).json({ message: "Wrong Password" });
      }
    } else {
      res.status(404).json({ message: "User doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
