
const mongoose = require("mongoose");

const sellerModel = mongoose.Schema(
  {
    sellerid: Number,
    sellername: String,
    sellermobile: Number,
    selleremail: String,
    selleraddress: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("sellers", sellerModel);
