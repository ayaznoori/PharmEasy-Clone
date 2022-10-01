const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    items:String,
});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;