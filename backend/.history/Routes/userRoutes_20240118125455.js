const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../Controllers/UserController");

const router = express.Router();

router.get("/:id", getUser);

router.post("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
