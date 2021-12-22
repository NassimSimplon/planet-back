//Json Web Token 
const jwt = require('jsonwebtoken');

 
 
exports.requireSignin = (req,res,next)=>{
    
 
   const token = req.body.token;
   console.log('token: ' + token);
   const x = jwt.verify(token, 'MEARNSECRET', function(err, decoded) {
       if (err) throw err;
       console.log(decoded);
   });
   console.log(x);
   if (x != true) {
       res.json({ auth: false });
   } else {
       res.json({ auth: true });
   }
}