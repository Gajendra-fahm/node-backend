const mongoose = require("mongoose");

const registerUserModel = mongoose.Schema({
    username: String,
    mobile: Number,
    email: String,
    address: String,
    password: String,
  },{ versionKey: false }
);

module.exports = mongoose.model("registernewusers", registerUserModel);
