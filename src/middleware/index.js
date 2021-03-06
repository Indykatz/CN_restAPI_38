const bcrypt = require("bcryptjs");
const User = require("../user/model");
const jwt = require("jsonwebtoken");

exports.hashPass = async (req, res, next) => {
  try {
    // const tempPass = req.body.password; //grabbed password variable from body, and stored it locally
    // const hashedPass = await bcrypt.hash(tempPass, 8); //hashed the password and stored it in a new constant
    // req.body.password = hashedPass; //stores freshly hashed password back in the req body
    req.body.password = await bcrypt.hash(req.body.password, 8); //all steps above, condensed into 1 line
    next(); //moves onto next middleware/controller in endpoint
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.passCompare = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (await bcrypt.compare(req.body.password, req.user.password)) {
      next();
    } else {
      throw new Error("Incorrect credentails");
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.tokenCheck = async (req, res, next) => {
  try {
    // const token = req.header("Authorization"); //grab token from Authorization header in the request
    const decodedToken = jwt.verify(
      req.header("Authorization"),
      process.env.SECRET
    ); //decode token using same secret that created the token
    req.user = await User.findById(decodedToken.id); //finding the user by their id, stored in the token
    next();
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
