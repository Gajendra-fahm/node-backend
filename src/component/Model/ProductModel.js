const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    productid:Number,
    productname:String,
    brand:String,
    modelno:String,
    price:Number,
    stock:Number
}, {versionKey:false});

module.exports = mongoose.model("productdetails",productModel )