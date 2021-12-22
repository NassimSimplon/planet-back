//Model 
const CARRIER = require('./Model');
//Express Router
const router = require('express').Router();
// MiddleWare Multer
const store = require('../Middleware/Multer');


//Add Carrier
router.post('/Carrier/add',async(req,res)=>{
    try{
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const profession = req.body.profession;
        
        

        const Carrier = await new CARRIER({
            nom,prenom,profession
        })
        await Carrier.save();
        res.json(Carrier);
       }
    catch(err){
      console.log(err)
       }
});
//Get Carrier
router.get('/Carrier/get',async(req,res)=>{
    try{
       const Carrier = await CARRIER.find();
       res.json(Carrier);
        }
    catch(err){
        console.log(err)
        }
});
//Delete Carrier
router.post('/Carrier/delete/:id',async(req,res)=>{
    try{
       const Carrier = await CARRIER.findByIdAndDelete(req.params.id);
       res.json(Carrier);
        }
    catch(err){
        console.log(err)
        }
});
//Update Carrier
router.put('/Carrier/update/:id',async(req,res)=>{
    try{
       const Carrier = await CARRIER.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.json(Carrier);
        }
    catch(err){
        console.log(err)
        }
});


//Export Router
module.exports = router;
