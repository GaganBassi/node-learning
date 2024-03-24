
const mongoose=require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    title: {type:String,required:[true,'Missing title'], unique:true}, // String is shorthand for {type: String}
    description: String,
    price:Number,
    discountPercentage:Number,
    rating:{type:Number,min:[0,'Wrong Rating'], max:5, required:true},//Validation
    brand:String,
    category:String,
    thumbnail:String,
    images:[String]//array of string
   
    
  });

  //Creation of Model

const Product = mongoose.model('productCollection', productSchema);//collection which follows productSchema 
//productCollection collection name in a database
//Product is a model and it will be useful in operating CRUD operations.

exports.Product=Product;