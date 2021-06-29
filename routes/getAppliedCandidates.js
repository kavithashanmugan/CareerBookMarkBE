const express = require('express')
const router = express.Router();

const job = require('../models/job');
const UserProfile = require('../models/userProfile');


router.get('/getAppliedCandidates/:jobId', async function(req, res) {
    console.log("requesting for job",JSON.stringify(req.params.jobId))
    const filter = {jobId: req.params.jobId};
console.log("filter...",filter)

job.find(filter,"appliedCandidates").exec(function(err, result)  {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            
            res.status(200).json({
                "status": true,
                "result":result[0].appliedCandidates
            });
        }
    });

})

module.exports = router;