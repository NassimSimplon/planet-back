//Model 
const ADMIN = require('./Model');
//Express Router
const router = require('express').Router();
//Bcrypt 
const bcrypt = require('bcrypt');

//Add Admin
router.post('/admin/add',async(req,res)=>{
    try{
        const adminNom = req.body.adminNom;
        const adminPrenom = req.body.adminPrenom;
        const adminEmail = req.body.adminEmail;
        //Encrypt Password
        const salt = await new bcrypt.genSalt(10);
        const password = await new bcrypt.hash(req.body.password,salt);
        const admin = await new ADMIN({
            adminNom,adminPrenom,adminEmail,password

        })
        await admin.save();
        res.json(admin);
       }
    catch(err){
      console.log(err)
       }
});
//Get Admin
router.get('/admin/get',async(req,res)=>{
    try{
       const admin = await ADMIN.find();
       res.json(admin);
        }
    catch(err){
        console.log(err)
        }
});
//Delete Admin
router.delete('/admin/delete/:id',async(req,res)=>{
    try{
       const admin = await ADMIN.findByIdAndDelete(req.params.id);
       res.json(admin);
        }
    catch(err){
        console.log(err)
        }
});

//Export Router
module.exports = router;
