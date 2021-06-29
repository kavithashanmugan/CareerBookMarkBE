//create Profile

// const express=()

const express = require('express')

const router = express.Router();
const mongoose = require('mongoose');

const Jobs = require('../models/job');

router.post('/postJob', async(req, res, next) => {
    console.log("creating...job")
    let jobId = Math.random().toString(20).slice(8).toUpperCase();

    const jobs = new Jobs({
        jobId: jobId,
        hirerId:req.body.hirerId,
        jobTitle: req.body.jobTitle,
        Company: req.body.Company,
        companyDesc: req.body.companyDesc,
        salaryRange:req.body.salaryRange,
        jobLocation: req.body.jobLocation,
        jobType: req.body.jobType,
        jobStartDate: req.body.jobStartDate,
        jobRequirements: req.body.jobRequirements,
        jobSummary: req.body.jobSummary,
        jobPostedDate:req.body.jobPostedDate,
        jobStatus:req.body.jobStatus
        
    });
console.log(jobs,"jobsssss")
   

     jobs.save(function (err, docs) {
        if (err){
        console.log(err)
        res.status(500).send(err);
        }
        else{
        console.log("Updated User : ", docs);
        res.status(200).send({
                    "status": true,
                    "result":docs
                });
        }
        });
    // try {
    //     await jobs.save()
    //     res.send({ "status": true });
    // } catch {
    //     res.status(404).send({ "status": false });
    // }
});



module.exports = router;