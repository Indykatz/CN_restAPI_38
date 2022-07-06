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
  const search = { username: req.body.username };
  const newData = {
    username: req.body.username,
    email: req.body.email,
  };
  const userEdits = await User.updateOne(search, newData);
  res.send({ users: userEdits });
  try {
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

// Delete a User
exports.deleteUser = async (req, res) => {
  const removeUser = await User.deleteOne(req.body);
  res.send({ user: removeUser });
  try {
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
