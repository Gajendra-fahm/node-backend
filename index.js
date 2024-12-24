const express = require("express");
const mongoose = require("mongoose");

const app = express();
// mongoose.connect('mongodb://localhost:27017/crud');
mongoose.connect('mongodb://localhost:27017/crud');

//user schema
const UserSchema =new mongoose.Schema({
    name:String,
    age:Number
})

//search schema
const UserSearchSchema = new mongoose.Schema({
    userid:String,
    username:String,
    phone:String
});

const UserModel = mongoose.model("users", UserSchema);
const SearchUserModel = mongoose.model("searches", UserSearchSchema);


app.get("/getUsers", (req,res)=>{
    UserModel.find({}).then(function(data){
        res.json(data)
    }).catch(function(err){
        console.log(err);
    })

})

app.get("/getSearchUsers", (req,res)=>{
    SearchUserModel.find({}).then(function(searchdata){
        res.json(searchdata)
    }).catch(function(err){
        console.log(err);
    })
    
})

app.listen(6006, ()=>{
    console.log("server is running");
})