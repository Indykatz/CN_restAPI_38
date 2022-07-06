const { Router } = require("express"); //import Router method only from express
const {
  signUp,
  findAll,
  updateUser,
  deleteUser,
  login,
} = require("./controllers"); // import only signup from controllers fileconst { hashPass } = require("../middleware");

const { hashPass } = require("../middleware");

const userRouter = Router(); //create a router that can have endpoints added to it

userRouter.post("/user", hashPass, signUp); //defining a post request on /user path, that calls the signUp controller

userRouter.get("/user", findAll); // defining a get request on /user path

userRouter.patch("/user", updateUser); // defining a patch request on /user path

userRouter.delete("/user", deleteUser); // defining a delete request on /user path

userRouter.post("/login", login); //defining a post request on /login path, that calls the login controller

module.exports = userRouter;
