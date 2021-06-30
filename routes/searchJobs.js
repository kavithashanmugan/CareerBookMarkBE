const { response } = require('express');
const express = require('express');
var dotenv = require('dotenv');
const router = express.Router();

const job = require('../models/job');

router.post('/searchJobs', async function(req, res) {
   // const 

var jobTitleSearch = req.body.jobKeyWords;
var location = req.body.location;
var jobType = req.body.jobType;
console.log("jobsearch",jobTitleSearch)

    await job.find({$and:[{$or:[{"jobTitle":{$regex:`${jobTitleSearch}`,$options:'i'}},{"Company":{$regex:`${jobTitleSearch}`,$options:'i'}}]},{jobLocation:{$regex:`${location}`,$options:'i'}},{ jobType:{$regex:`${jobType}`,$options:'i'}}]}, function(err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.status(200).json({
                "status": true,
                "result":result
            });
        }
    })

})


module.exports = router;