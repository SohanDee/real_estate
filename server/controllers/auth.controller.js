const User = require('../models/user.model.js')
const bcryptjs = require("bcryptjs");
const errorHandler = require('../utils/error.js')
const jwt = require('jsonwebtoken')

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({username, email, password:hashedPassword})
  try {
    await newUser.save();
    res.status(201).json({ "message" : "User created succesfully" });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const validUser = await User.findOne({email:email});
    if(!validUser){
     return next(errorHandler(404, "User not found!"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if(!validPassword){
      return (next(errorHandler(401, "Wrong Credentials!")));
    }
    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
    const {password: pw, ...rest} = validUser._doc
    res.cookie("access_token", token, {httpOnly:true}).status(200).json(rest);
  } catch (error) {
    next(error)
  }
}

module.exports = { signup, signin};
