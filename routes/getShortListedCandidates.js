const express = require('express')
const router = express.Router();

const job = require('../models/job');
const UserProfile = require('../models/userProfile');


router.get('/getShortListedCandidates/:jobId', async function(req, res) {
    console.log("getting short listed",JSON.stringify(req.params.jobId))
    const filter = {jobId: req.params.jobId};
console.log("filter...",filter)

job.find(filter,"shortlistedCandidates").exec(function(err, result)  {
        if (err) {
            console.log(err)
        } else {
            console.log("shortlisted",result)
            
            res.status(200).json({
                "status": true,
                "result":result[0].shortlistedCandidates
            });
        }
    });

})

module.exports = router;