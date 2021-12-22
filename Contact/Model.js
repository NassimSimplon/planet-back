//Mongoose
const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
//Model
module.exports = mongoose.model('contact',new Schema({
    nom:{
        type:String,
        
        trim:true,
        min:3,
        max:30 ,
        lowercase:true
    },
    prenom:{
        type:String,
        
         trim:true,
        min:3,
        max:30 ,
        lowercase:true
    },
    email:{
        type:String,
        
        trim:true,
        min:3,
        max:50 ,
        lowercase:true
    },
   message: {
        type:String,
        
        lowercase:true
    }
}));

