const bcrypt = require("bcryptjs");
const User = require("../user/model");

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
    const theUser = await User.findOne({ username: req.body.username });
    // console.log(theUser.password);
    // const enteredPWord = req.body.password;
    // console.log(enteredPWord);
    const hashedPass = await bcrypt.compare(
      req.body.password,
      theUser.password
    );
    // console.log(hashedPass);
    // console.log(theUser);
    if (hashedPass) {
      req.body.password = theUser.password;
    }

    next();
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
