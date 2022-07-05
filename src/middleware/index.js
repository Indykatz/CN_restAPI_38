const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
  try {
    // const tempPass = req.body.password; // grabbed password var from body
    // const hashedPass = await bcrypt.hash(tempPass, 8); // hashed the password
    // req.body.password = hashedPass; // new hashed password
    req.body.password = await bcrypt.hash(req.body.password, 8);;
    next();
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
