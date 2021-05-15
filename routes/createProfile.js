//create Profile

// const express=()

const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/users');

router.post('/createUser',(req,res,next)=>{
    console.log("creating...")
    const user = new User({
        _id:new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        emailId: req.body.emailId,
        jobTitle: req.body.jobTitle,
        location: req.body.location,
        summary: req.body.summary
    }); 
    //_id:new mongoose.Types.ObjectId(),
    //,resume:req.files.resume
        console.log("user...",user)
        user.save()
        .then(result=>{
            console.log(result);
            res.status(201).json({
                message:"created user successfully"
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error:err
            })
        })

});

module.exports = router;

// _id:new mongoose.Types.ObjectId(),
// firstName:req.body.firstName,
// lastName:req.body.lastName,
// phoneNumber:req.body.phoneNumber,
// emailId:req.body.emailId,
// jobTitle:req.body.jobTitle,
// location:req.body.location,
// summary:req.body.summary