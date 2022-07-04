const User = require("./model");

// request object and response object aka req and res - C create
exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body); // req.body is an object that contains k/v pairs that match user model
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
// exports.updateUser = async (req, res) => {
//   try {
//     const users = await User.update(req.body);
//     res.send(users);
//   } catch (error) {
//     console.log(error);
//     res.send({ error });
//   }
// };

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
