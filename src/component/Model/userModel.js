
const mongoose = require("mongoose");

const usersModel = mongoose.Schema({
    sellerid: Number,
    sellertradename: String,
    retailerid: Number,
    retailertradename:String,
    brandid: Number,
    brandname:String,
    categoryid: Number,
    categoryname:String,
    hyperlocallockid: Number,
    retailercity: String,
    sellercity:String
  },{ versionKey: false }
);

module.exports = mongoose.model("users", usersModel);
