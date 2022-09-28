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

app.listen(8080,()=>{

mongoose.connect('mongodb://127.0.0.1:27017/Nooridev',()=>console.log('db connected successfuly'));
console.log('server is running at port 8080')});