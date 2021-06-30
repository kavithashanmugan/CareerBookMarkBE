//create Profile

// const express=()

const express = require('express')

const router = express.Router();
const mongoose = require('mongoose');

const job = require('../models/job');

router.post('/closeJob', async(req, res, next) => {
    console.log("close...job")
    
    const jobId = {
        "jobId": req.body.jobId
    }
    console.log("job id for closing",jobId)
const jobStatus = {"jobStatus":"Closed"}


     job.findOneAndUpdate(jobId,jobStatus).exec(function(err, docs){
        if (err){
        console.log(err)
        res.status(500).send(err);
        }
        else{
        console.log("job closed : ", docs);
        res.status(200).send({
                    "status": true,
                    "result":docs
                });
        }
        });
    
});



module.exports = router;