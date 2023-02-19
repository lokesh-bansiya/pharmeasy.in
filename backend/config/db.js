const mongoose =require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', false)
let dbconnection =mongoose.connect(process.env.mongo_url)
module.exports={dbconnection}

