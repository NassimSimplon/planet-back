//Mongoose
const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
//Model
module.exports = mongoose.model('carriers',new Schema({
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
    profession:{
        type:String,
        trim:true,
        min:3,
        max:50 ,
        lowercase:true
    },
    cv: {
        type:String,
        lowercase:true
    }
}));

