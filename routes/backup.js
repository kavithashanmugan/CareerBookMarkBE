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



////new///////////
//apply for a job,
// const express = require("express");
// const router = express.Router();

// const job = require("../models/job");
// const UserProfile = require("../models/userProfile");

// router.post("/shortListCandidates",async function (req, res) {
//  console.log("hitting shortlist candidates")

//    await job.findOne({"jobId": req.body.jobId},{"appliedCandidates":{$elemMatch: {"userId": req.body.userId}}},{new: true}).exec(function(err, result) {
//     if (err) {
//         console.log(err)
//     } else {
//         if (result.length == 0){


            // res.status(200).json({
            //     "status": true,
            //     "result":result,
            //     "message":"No Candidates Found"
            // }); 
//         }
//         else{
//         console.log(result)
//         res.status(200).json({
//             "status": true,
//             "result":result,
        
//         });
//     }
//     }
//    })

// });


// module.exports = router;
