const User = require("../Models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10); // generate the salt
  const hashedPassword = await bcrypt.hash(password, salt);

  req.body.password = hashedPassword;

  const newUser = new User(req.body);

  try {
    const oldUser = await User.find({ username });

    if (oldUser) {
      return res.status(400).json({ message: "User is already registered" });
    }
    await newUser.save();
    res.status(200).json(newUser);
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
        res.status(200).json(user);
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
