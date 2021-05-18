const { response } = require('express');
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/users');

router.post('/getUser',function(req,res){
    console.log("user...connected..saved ..hello..")
    var emailId = req.body.id;

    User.find(({"_id":emailId}),function(err,result){
        if(err){
        console.log(err)
        }
        else {
        console.log(result)
        }
    }).then(result=>{
        res.json(result)
    })
    
})

module.exports = router;