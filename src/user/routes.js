const { Router } = require("express"); // import router method from express
const { signUp } = require("./controllers"); // import only signup from controllers file
const { findAll } = require("./controllers"); // import only findAll from controllers file
// const {updateUser } = require("./controllers"); // import only signup from controllers file
const { deleteUser } = require("./controllers"); // import only signup from controllers file

// const { signUp, findAll, updateUser, deleteUser } = require("./controllers"); // import only signup from controllers file

const userRouter = Router(); // create a router that can have endponts added to it

userRouter.post("/user", signUp); // defining a post request on /user path, that calls the signUp controller

userRouter.get("/user", findAll); // defining a get request on /user path

userRouter.patch("/user", updateUser); // defining a patch request on /user path

userRouter.delete("/user", deleteUser); // defining a delete request on /user path

module.exports = userRouter; // exports the module
