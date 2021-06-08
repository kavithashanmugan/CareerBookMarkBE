//create Profile

// const express=()

const express = require('express')

const router = express.Router();
const mongoose = require('mongoose');

const Jobs = require('../models/job');

router.post('/postJob', async(req, res, next) => {
    console.log("creating...")

    const jobs = new Jobs({
        jobId: req.body.jobId,
        jobTitle: req.body.jobTitle,
        Company: req.body.Company,
        companyDesc: req.body.companyDesc,
        jobLocation: req.body.jobLocation,
        jobType: req.body.jobType,
        jobStartDate: req.body.jobStartDate,
        jobEndDate: req.body.jobEndDate,
        jobRequirements: req.body.jobRequirements,
        jobSummary: req.body.jobSummary,
        jobPostedBy: req.body.jobPostedBy
    });

    //_id:new mongoose.Types.ObjectId(),
    //,resume:req.files.resume
    //console.log("job Details...", jobs)
    try {
        await jobs.save()
        res.send({ "status": true });
    } catch {
        res.status(404).send({ "status": false });
    }
});



module.exports = router;