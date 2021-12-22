//Mongoose
const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
//Model
module.exports = mongoose.model('admin',new Schema({
    adminNom:{
        type:String,
        
        trim:true,
        min:3,
        max:20 ,
        lowercase:true
    },
    adminPrenom:{
        type:String,
        
        trim:true,
        min:3,
        max:20 ,
        lowercase:true
    },
    adminEmail:{
        type:String,
        
        trim:true,
        min:3,
        max:30 ,
        lowercase:true
    },
   password: {
        type:String,
        
    },
}));

