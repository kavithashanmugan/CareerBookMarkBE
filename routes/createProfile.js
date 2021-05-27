//create Profile

// const express=()

const express = require('express')

const router = express.Router();
const mongoose = require('mongoose');

const UserDetails = require('../models/userDetails');

router.post('/createProfile', (req, res, next) => {
    console.log("creating...")
    const userDetails = new UserDetails({
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        website: req.body.website,
        emailId: req.body.emailId,
        jobTitle: req.body.jobTitle,
        location: req.body.location,
        summary: req.body.summary,
        experience: req.body.experience,
        education: req.body.education
    });
    //_id:new mongoose.Types.ObjectId(),
    //,resume:req.files.resume
    console.log("user Details...", userDetails)
    userDetails.save()
    res.status(200).send({
        "status": true
    });
    // .then(result => {
    //     console.log(result);
    //     res.status(201).json({
    //         message: "created user successfully"
    //     });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json({
    //         error: err
    //     })
    // })

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