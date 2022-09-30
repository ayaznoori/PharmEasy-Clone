const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:String,
    number:{type:Number,unique:true},
    email:{type: String, unique:true},
    password:String
});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;