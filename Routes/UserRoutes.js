// importer Express et Express.Router
const express = require("express");

// importer les controllers depuis controllers
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../Controllers/UserControllers");

// pour utiliser la librairie router
const router = express.Router();

router.get("/user", getUser);
router.post("/user", createUser);
router.put("/user", updateUser);
router.delete("/user", deleteUser);

module.exports = router;
