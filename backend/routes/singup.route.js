const express = require("express");
const bcrypt = require("bcrypt");
const SignupRoute = express.Router();
const { UserModel } = require("../models/user.model");
const { SignupMiddleware } = require("../middlewares/signupmiddleWare");

SignupRoute.post("/", SignupMiddleware, async (req, res) => {
  const { Email, Password ,FullName} = req.body;
  console.log("Check",req.body)
  const hashedPass = await bcrypt.hash(Password, 6);
  var Type;
  
if(Email.includes("@masaischool.com")){
  Type="Admin"
}else{
  Type="User"
}


  const newUser = new UserModel({ Email, Password: hashedPass,FullName,Type});
  await newUser.save();
  res.send({ msg: "SignUp successfull" });
});


module.exports = { SignupRoute };
