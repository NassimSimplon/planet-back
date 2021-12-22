//Mongoose
const mongoose = require('mongoose');
//Schema
const Schema = mongoose.Schema;
//Model
module.exports = mongoose.model('partenaires',new Schema({

    image:{
        type:String
        
    },
    nom:{
        type:String,
        trim:true,
        min:3,
        max:20 ,
        lowercase:true
    },

    prenom:{
        type:String,
        trim:true,
        min:3,
        max:20 ,
        lowercase:true
    },

    profession:{
        type:String,
        trim:true,
        min:3,
        max:20 ,
        lowercase:true
    },

    numéroDeTéléphone:{
        type:String,
        trim:true,
        min:3,
        max:30 ,
        lowercase:true
    },

    nomCompagnie:{
        type:String,
        trim:true,
        min:3,
        max:20 ,
     lowercase:true
    },

    pays:{
        type:String,
        trim:true,
        min:3,
        max:30 ,
        lowercase:true 
    },

    objetDuPartenariat:{
        type:String,
        lowercase:true
       
    },

    sujet:{
        type:String,
        lowercase:true
    },

    message:{
        type:String,
        lowercase:true
    },

    email:{
        type:String,
        trim:true,
        min:3,
        max:20 ,
        lowercase:true
    },

    accepted:{
        type:String,
         enum:['true','false'],
        default: 'false'
    }
 
}));

