const mongoose = require('mongoose')

const employeModel = mongoose.Schema({
    empid:Number,
    empname:String,
    empemail:String,
    empaddress:String,
    empmob:Number,
    alertmob:Number
}, {versionKey:false})

module.exports = mongoose.model("employes",employeModel )