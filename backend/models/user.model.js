const mongoose = require("mongoose");
const userScema = mongoose.Schema({
  Email: String,
  Password: String,
  FullName:String,
  Type:String
});

const UserModel = mongoose.model("user", userScema);
module.exports = { UserModel };
