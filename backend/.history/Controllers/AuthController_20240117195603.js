const User = require("../Models/User");
const bcrypt

const registerUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  const newUser = new User({ username, password, firstName, lastName });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = registerUser;
