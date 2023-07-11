// importer les schéma ici depuis le model

const User = require("../Model/User");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const userG = await User.find(req.body);
    res.status(200).json(userG);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userUp = await User.findByIdAndUpdate(
      "64adbc428a530651199c0d26",
      req.body,
      { new: true }
    );
    res.status(200).json(userUp);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(
      "64adbc428a530651199c0d26"
    );
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };
// importer les exports dans Routes
