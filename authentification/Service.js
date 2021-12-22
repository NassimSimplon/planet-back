//Model 
const ADMIN = require('../admin/Model');
//Express Router
const router = require('express').Router();
//Json Web Token
const jwt = require('jsonwebtoken');
// Verfication
const {requireSignin} = require('../Middleware/token');
//Bcrypt
const bcrypt = require('bcrypt');

//Sign In
router.post('/admin/signIn',async (req, res) => {
    ADMIN.findOne({ adminEmail: req.body.adminEmail }).exec(async (error, user) => {
      if (error) return res.status(400).json({ error });
      if (user) {
        const verPass =  await new bcrypt.compare(req.body.password,user.password);
         if (verPass ) {
          const token =  jwt.sign({_id:user._id,adminNom:user.adminNom,adminPrenom:user.adminPrenom,adminEmail:user.adminEmail},'MEARNSECRET',{expiresIn:'1h'})
           res.status(200).json({
            token 
          });
        } else {
          return res.status(400).json({
            message: "Invalid password !",
          });
        }
      } else {
        return res.status(400).json({ message: "Something went wrong" });
      }
    });
  })

  module.exports = router