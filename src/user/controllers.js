const User = require("./model");

// Create
exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body); //req.body is an object that contains k/v pairs that match my User model
    res.send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// Get all users
exports.findAll = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.send({ users });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// Update a users
exports.updateUser = async (req, res) => {
  try {
    const userEdits = await User.updateOne(
      req.body.filterObj,
      req.body.updateObj
    );
    res.send({ user: userEdits });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// Delete a User
exports.deleteUser = async (req, res) => {
  try {
    const removeUser = await User.deleteOne({ username: req.params.username });
    res.send({ user: removeUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!user) {
      throw new Error("Incorrect credentials");
    } else {
      res.send({ user });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
