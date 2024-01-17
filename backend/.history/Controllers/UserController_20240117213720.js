const User = require("../Models/User");

// get a user

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc; // remove the password from the returned other by destructuring it
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json({ message: "User doesn't exist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  // account is updated by the same person or a admin wants to update the account
  if (id === currentUserId || currentUserAdminStatus) {
    try {
      const user = await User.findByIdAndUpdate(id);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = {
  getUser,
  updateUser,
};
