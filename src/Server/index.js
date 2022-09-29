const express=require('express');
const mongoose=require('mongoose');
const userModel = require('./Schema/userSchema');
const nodemailer=require('nodemailer');
const jwt =require('jsonwebtoken');
const OtpModel = require('./Schema/otpSchema');
const app=express();

app.use(express.json());


const transport=nodemailer.createTransport({
  host:'smtp.ethereal.email',
  port:587,
  auth:{
      user:"sophia22@ethereal.email",
      pass:"azUg8e1QfSszj6BYrA"
  }
});

//sending user otp in his email
app.post('/sendOtp',async (req,res)=>{
  let emailid=req.body.email;
  if(emailid==""){
      res.send({"errormsg":"Email id is Maindatory"})
  }
  else{
  let otp=Math.floor(Math.random()*9000) + 1000;
  await transport.sendMail({
      from:"ayaz.noori15@gmail.com",
      to:`${emailid}`,
      subject:"urgent",
      text:`Your verification Otp is ${otp}`
  }).then(async(e)=>{
      const check= await OtpModel.find({email:emailid});                  //reset the otp if present with same email
      if(check.length>=1){
          await OtpModel.deleteMany({email:emailid});   
      }
      const otpsave= new OtpModel({otp:otp,email:emailid});
      otpsave.save();
      res.status(200).send({'msg':'Otp send successfully'})})
  .catch(e=>res.send({"errormsg":e}))
}
});


// For verifying the otp
app.post('/verify',async(req,res)=>{
  let check=req.body;
  let verify= await OtpModel.find({email:check.email,otp:check.otp});    
  if(verify.length==1){
  res.status(200).send({"msg":"Verified Successfully"});
  OtpModel.deleteOne({email:check.email,otp:check.otp});
  }
  else
  res.status(404).send({"errormsg":"incorrect Otp"});
})

//user Signup
app.post('/signup',async (req,res)=>{
  let data=req.body;
  if(data.email && data.password !=""){
         const check= await userModel.find({email:data.email});                                                     // checking that user already present
         if(check.length>0){
               res.status(400).send({"errormsg": "This Email id already exist"})      // return already present if present in db
          } 
          else{
              const user=new userModel(data);
              user.save((err,result)=>
              {
                  if(!err){
                      res.status(201).send(data)                                      //sending data to frondend
                  }else
                  {
                     res.status(400).send({'errormsg':'something went wrong'})
                  }
              });
        }
         
  }
  else{
      res.status(400).send({'errormsg':'all field mandetory'});                       //error if some feild is blank
  }

});

//user Login

app.post('/login',async(req,res)=>{
 let data=req.body;
 let check=await userModel.aggregate([{$match:{email:data.email,password:data.password}}]);
 if(check.length==1){
     let token=jwt.sign({id:check[0]._id,email:check[0].email},"ayaztokenkey",{expiresIn:'30 min'});
     let refreshtoken=jwt.sign({},"ayazrefreshkey",{expiresIn:'7 days'});
     res.status(200).send({token:token,refreshtoken:refreshtoken});
 }
 else{
  res.status(401).send({errormsg:"Incorrect email or password"})
 }
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