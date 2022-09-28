const express=require('express');
const mongoose=require('mongoose');
const userModel = require('./Schema/userSchema');

const app=express();

app.use(express.json());





app.get('/',async(req,res)=>{
    let data= await userModel({"username":"ayaz"});
    data.save();
    res.send('Demo Working');

})

app.listen(8080,async ()=>{
try{
await mongoose.connect('mongodb+srv://ayaznoori15:Alam%40123@cluster0.tfjgqr1.mongodb.net/user?retryWrites=true&w=majority')
console.log("hello")
}
catch(err){
  console.log(err)
}


console.log('server is running at port 8080')});