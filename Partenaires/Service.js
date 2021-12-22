//Model 
const PARTENAIRE = require('./model');
//Express Router
const router = require('express').Router();
//MiddleWare Multer
const store = require('../Middleware/Multer');

//Add Partenaire
router.post('/partenaire/add',store.single('image'),async(req,res)=>{

    try{
         const nom = req.body.nom;
        const prenom = req.body.prenom;
        const profession = req.body.profession;
        const numéroDeTéléphone = req.body.numéroDeTéléphone;
        const nomCompagnie = req.body.nomCompagnie;
        const pays = req.body.pays;
        const objetDuPartenariat = req.body.objetDuPartenariat;
        const sujet = req.body.sujet;
        const message = req.body.message;
        const email = req.body.email;
        const partenaire = await new PARTENAIRE({
            nom,prenom, profession,numéroDeTéléphone,
            nomCompagnie,pays,objetDuPartenariat,sujet,
            message,email        })
        await partenaire.save();
        res.json(partenaire);
       }
    catch(err){
      console.log(err)
       }
});

//Get All Partenaires
router.get('/partenaire/Get',async(req,res)=>{
    try{
       const partenaire = await PARTENAIRE.find();
       res.json(partenaire);
        }
    catch(err){
        console.log(err)
        }
});

//Delete Partenaire
router.delete('/partenaire/delete/:id',async(req,res)=>{
    try{
       const partenaire = await PARTENAIRE.findByIdAndDelete(req.params.id);
       res.json(partenaire);
        }
    catch(err){
        console.log(err)
        }
});

//Update Partenaire
router.put('/partenaire/update/:id',async(req,res)=>{
    try{
       const partenaire = await PARTENAIRE.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.json(partenaire);
        }
    catch(err){
        console.log(err)
        }
});
router.get('/partenaire/get/:id',async(req,res)=>{
    try{
       const partenaire = await PARTENAIRE.findById(req.params.id);
       res.json(partenaire);
        }
    catch(err){
        console.log(err)
        }
});


//Export Router
module.exports = router;
