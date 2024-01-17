const User = require("../Models/User");

// get a user

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = getUser;
