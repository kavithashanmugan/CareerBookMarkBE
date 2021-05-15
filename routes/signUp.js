var express = require('express');
var router = express.Router();


router.post('/signUp',(req,res)=>{
    console.log("hitting...")
    var email = req.body.email 

    res.send({"email":email})
})
 module.exports = router;
