//Mongoose
const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
//Model
module.exports = mongoose.model('services',new Schema({
    image:{
        type:String,
        
    },
    serviceTitle:{
        type:String,
        
        trim:true,
        min:3,
        max:40 ,
        lowercase:true
    } 
}));

