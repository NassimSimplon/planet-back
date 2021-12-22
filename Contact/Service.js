//Model 
const CONTACT = require('./Model');
//Express Router
const router = require('express').Router();


//Add contact
router.post('/contact/add',async(req,res)=>{
    try{

        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email = req.body.email;
        const message = req.body.message;

        const contact = await new CONTACT({
            nom,prenom,email,message

        })
        await contact.save();
        res.json(contact);
       }
    catch(err){
      console.log(err)
       }
});
//Get contact
router.get('/contact/get',async(req,res)=>{
    try{
       const contact = await CONTACT.find();
       res.json(contact);
        }
    catch(err){
        console.log(err)
        }
});
//Delete contact
router.post('/contact/delete/:id',async(req,res)=>{
    try{
       const contact = await CONTACT.findByIdAndDelete(req.params.id);
       res.json(contact);
        }
    catch(err){
        console.log(err)
        }
});
//Update contact
router.put('/contact/update/:id',async(req,res)=>{
    try{
       const contact = await CONTACT.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.json(contact);
        }
    catch(err){
        console.log(err)
        }
});
//Export Router
module.exports = router;
