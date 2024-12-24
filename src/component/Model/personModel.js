const mongoose = require("mongoose");

const personDetailsModel = mongoose.Schema({
    personname:String,
    email:String,
    mobile:Number,
    password:String
}, {versionKey:false})


module.exports = mongoose.model("persondetails", personDetailsModel)