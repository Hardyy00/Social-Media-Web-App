const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
  followUser,
} = require("../Controllers/UserController");

const router = express.Router();

router.get("/:id", getUser);

router.post("/:id", updateUser);

router.delete("/:id", deleteUser);

router.patch("/:id", followUser);

module.exports = router;
