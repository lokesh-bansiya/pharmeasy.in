const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const LoginRoute = express.Router();
const { UserModel } = require("../models/user.model");
LoginRoute.post("/", async (req, res) => {
  const { Email, Password } = req.body;
  if (!Email || !Password) res.send({ msg: "wrong creadentials" });
  const user = await UserModel.findOne({ Email: Email });
  if (!user) return res.send({ msg: "wrong creadentials" });
  const isValidUser = await bcrypt.compare(Password, user.Password);
  if (!isValidUser) return res.send({ msg: "wrong creadentials" });
  var token = await jwt.sign({ userID: user._id }, "holistic");
  res.send({ token, Type: user.Type });
});

module.exports = { LoginRoute };
