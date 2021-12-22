//Model 
const SERVICE = require('./Mode');
//Express Router
const router = require('express').Router();
// MiddleWare Multer
const store = require('../Middleware/Multer')


//Add service
router.post('/service/add',store.single('image'),async(req,res)=>{
    try{
        const image = '/' + req.file.fieldname + '/' + req.file.filename;
        
        const serviceTitle = req.body.serviceTitle;
 
        const service = await new SERVICE({
            image,serviceTitle

        })
        await service.save();
        res.json(service);
       }
    catch(err){
      console.log(err)
       }
});
//Get service
router.get('/service/get',async(req,res)=>{
    try{
       const service = await SERVICE.find();
       res.json(service);
        }
    catch(err){
        console.log(err)
        }
});
//Delete service
router.post('/service/delete/:id',async(req,res)=>{
    try{
       const service = await SERVICE.findByIdAndDelete(req.params.id);
       res.json(service);
        }
    catch(err){
        console.log(err)
        }
});
//Update service
router.put('/service/update/:id',async(req,res)=>{
    try{
       const service = await SERVICE.findByIdAndUpdate(req.params.id,req.body,{new:true});
       res.json(service);
        }
    catch(err){
        console.log(err)
        }
});


//Export Router
module.exports = router;
