//Model 
const PRODUCT = require('./Model');
//Express Router
const router = require('express').Router();
// MiddleWare Multer
const store = require('../Middleware/Multer');


//Add product
router.post('/product/add',async(req,res)=>{
    try{
         const title = req.body.title;
        const description = req.body.description;
        const product = await new PRODUCT({
          title,description
        })
        await product.save();
        res.json(product);
       }
    catch(err){
      console.log(err)
       }
});
//Get product
router.get('/product/get',async(req,res)=>{
    try{
       const product = await PRODUCT.find();
       res.json(product);
        }
    catch(err){
        console.log(err)
        }
});
//Delete product
router.post('/product/delete/:id',async(req,res)=>{
    try{
       const product = await PRODUCT.findByIdAndDelete(req.params.id);
       res.json(product);
        }
    catch(err){
        console.log(err)
        }
});
//Update product
router.put('/product/update/:id',async(req,res)=>{
    try{
       const product = await PRODUCT.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.json(product);
        }
    catch(err){
        console.log(err)
        }
});


//Export Router
module.exports = router;
