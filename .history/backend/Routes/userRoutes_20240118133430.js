const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
  followUser,
  unfollowUser,
} = require("../Controllers/UserController");

const router = express.Router();

router.get("/:id", getUser);

router.post("/:id", updateUser);

router.delete("/:id", deleteUser);

router.patch("/:id/follow", followUser); // we are updating the users info

router.patch("/:id/unfollow", unfollowUser);

module.exports = router;
