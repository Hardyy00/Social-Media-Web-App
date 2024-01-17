const User = require("../Models/User");

// get a user

const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);
};

module.exports = getUser;
