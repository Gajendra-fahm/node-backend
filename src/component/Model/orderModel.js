const mongoose = require("mongoose")

const orderDetailModel = mongoose.Schema({
    orderid:Number,
    orderdate:String,
    productname:String,
    brand:String,
    personname:String,
    mobile:Number,
    address:String,
    pincode:Number,
    city:String,
    landmark:String
}, {versionKey:false})

module.exports = mongoose.model("orders", orderDetailModel)