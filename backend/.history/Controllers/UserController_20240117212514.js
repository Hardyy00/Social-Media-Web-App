const User = require("../Models/User");

// get a user

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (user) {
      const { password, ...otherDetails } = user.res.status(200).json(user);
    } else {
      res.status(404).json({ message: "something went wrong" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getUser;
