const express = require('express')
const router = express.Router();

const job = require('../models/job');
const UserProfile = require('../models/userProfile');
var jobArray=[]
function getJobById(jobId){
    const filter = {jobId: jobId};
console.log("filter...",filter)

    await job.findOne(filter).exec(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            jobArray.push(result);
            return jobArray;
        }
    });
}
router.get('/getAppliedJobs/:userId', async function(req, res) {
    console.log("requesting for job",JSON.stringify(req.params.userId))
    const filter = {userId: req.params.userId};
console.log("filter...",filter)

UserProfile.find(filter,"appliedJobs").exec(function(err, result)  {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            
            res.status(200).json({
                "status": true,
                "result":result[0].appliedJobs
            });
        }
    });

})

module.exports = router;