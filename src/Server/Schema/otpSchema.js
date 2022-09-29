const  mongoose =require('mongoose');


const OtpSchema = mongoose.Schema({
    email:String,
    otp:Number
});

const OtpModel=mongoose.model('otp',OtpSchema);

module.exports=OtpModel;