//Mongoose
const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
//Model
module.exports = mongoose.model('product',new Schema({
    
    image:{
        type:String,
        
    },
    title:{
        type:String,
        trim:true,
        min:3,
        max:30 ,
        lowercase:true
    },
   description: {
        type:String,
             
        lowercase:true
    },
}));

