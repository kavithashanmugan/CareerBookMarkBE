const express = require('express')
const router = express.Router();

const job = require('../models/job');
const UserProfile = require('../models/userProfile');


router.get('/getRejectedCandidates/:jobId', async function(req, res) {
    console.log("requesting for job",JSON.stringify(req.params.jobId))
    const filter = {jobId: req.params.jobId};
console.log("filter...",filter)

job.find(filter,"rejectedCandidates").exec(function(err, result)  {
        if (err) {
            console.log(err)
        } else {
            //console.log(result)
            if(result[0].rejectedCandidates.length==0){
                res.status(200).json({
                    "status": true,
                    "result":result[0].rejectedCandidates,
                    "message":"No Candidates Rejected"
                });
            }
            else{
            res.status(200).json({
                "status": true,
                "result":result[0].rejectedCandidates
            });
        }
        }
    });

})

module.exports = router;