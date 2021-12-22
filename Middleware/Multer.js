const multer = require('multer')
 
var storage = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null,'../client-side/public/image')
  },
  filename:function(req,file,cb){
      var ext = file.originalname.substring(file.originalname.lastIndexOf('.'))
cb(null,file.fieldname +'-'+ Date.now()+ ext)

  }


})
const store = multer({storage:storage}) 
module.exports = store