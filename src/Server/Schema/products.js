const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name: String,
    storename: String,
    price:Number,
    offprice:Number,
    offpercentage:Number,
    category:String,
    img1:String,
    img2:String,
    img3:String
    });

const productModel=mongoose.model('Product',productSchema);

module.exports=productModel;