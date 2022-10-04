const express=require('express');
const mongoose=require('mongoose');
const userModel = require('./Schema/userSchema');
const nodemailer=require('nodemailer');
const OtpModel = require('./Schema/otpSchema');
const productModel = require('./Schema/products');
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());


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
  if(emailid===""){
      return res.send({"errormsg":"Email id is Maindatory"})
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
      res.status(200).send({'msg':'Otp send successfully',otp})})
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
  if(data.email){
         const check= await userModel.find({email:data.email});                                                    // checking that user already present
     try{    if(check.length>0){
               res.status(200).send(check)      // return already present if present in db
          } 
        else{
              const user=new userModel(data);
              user.save((err,result)=>
              {
                  if(!err){
                      res.status(201).send([user])                                      //sending data to frondend
                  }else
                  {
                    console.log(err)
                     res.status(400).send({'errormsg':'something went wrong'})
                  }
              });
        }}
        catch(err){
          console.log("err",err)
        }
         
      }
  else{
      res.status(400).send({'errormsg':'all field mandetory'});                       //error if some feild is blank
  }
});

//updating user
app.post('/updateUser',async (req,res)=>{
  let data=req.body;
  if(data.email){
         const check= await userModel.find({email:data.email});              // checking that user already present
         if(check.length>0){     
              const user= await userModel.updateOne({email:data.email},data);
              res.send(user)
        }
        else {
            res.send({'errormsg':'email not found'});
        }   
  }
  else{
      res.status(400).send({'errormsg':'all field mandetory'});                       //error if some feild is blank
  }
});


//used for inserting data in database mongo
/* app.post('/ppp',async(req,res)=>{
    const data=req.body;
    console.log(data);
    try{
      for(let i=0;i<data.length;i++){
        const user=new productModel(data[i]);
        user.save();
      }
    }
    catch(err){
      res.status(400).send({'errormsg':'something went wrong'})
    }
      res.status(201).send(data)                                      
}) */

//fetch data categorywise
app.get('/products',async(req,res)=>{
  if(req.query.category){
    const data=await productModel.find({category:req.query.category});
    res.send(data);
  }
  else if(req.query.name){
    const data=await productModel.find({name:{ $regex: `${req.query.name}`, $options: 'i' }});
    res.send(data)
  }
  else{
    const data=await productModel.find();
    res.send(data);
  }
 
})

//fetch medicine name using id
app.get('/products/:id',async(req,res)=>{
  let id=req.params.id;
  const data=await productModel.find({_id:id});
  res.send(data)
})

app.listen(process.env.PORT || 3030,async ()=>{
try{
await mongoose.connect('mongodb+srv://ayaznoori15:Alam%40123@cluster0.tfjgqr1.mongodb.net/user?retryWrites=true&w=majority')
console.log("hello")
}
catch(err){
  console.log(err)
}

console.log('server is running at port 8080')});
