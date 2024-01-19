const User = require("../Models/User");
const bcrypt = require("bcrypt");

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

// update user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  // account is updated by the same person or a admin wants to update the account
  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        // update the old password, by adding the new hashed password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        req.body.password = hashPassword;
      }
      // new : true, means it will return the info of the updated user, otherwise it will return me the info of the deprecated data
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(403).json({ message: "Access Denied!!" });
  }
};

// delete user
const deleteUser= async (req,res)=>{

  const {id} = req;

  const {currentUserId,currentUserAdminStatus} = req.body;

  if(id===currentUserId )
}
module.exports = {
  getUser,
  updateUser,
};
