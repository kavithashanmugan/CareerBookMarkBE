//apply for a job,
const express = require("express");
const router = express.Router();

const job = require("../models/job");
const UserProfile = require("../models/userProfile");
var ObjectId = require('mongodb').ObjectID;

router.post("/shortListCandidates",async function (req, res) {
 console.log("hitting shortlist candidates")

   await job.findOneAndUpdate({$and:[{"appliedCandidates.userId":req.body.userId},{"jobId":req.body.jobId}]},{$set:{"appliedCandidates.$.userStatus":"shortListed"}}).exec(async function(err, result) {
    if (err) {
        console.log(err)
    } else {
        if (result.length == 0){



            res.status(200).json({
                "status": true,
                "result":result,
                "message":"No Candidates Found"
            }); 
        }
        else{
           
            let final = await job.findOne({"jobId": req.body.jobId},{"appliedCandidates":{$elemMatch: {"userId": req.body.userId}}})
         
           const userShortListed = await job.findOneAndUpdate({"jobId":req.body.jobId },{$push:{"shortlistedCandidates":final.appliedCandidates[0]}});
     await UserProfile.findOneAndUpdate({$and:[{"appliedJobs.jobId":req.body.jobId},{"userId":req.body.userId}]},{$set:{"appliedJobs.$.jobStatus":"shortListed"}})
        res.status(200).json({
            "status": true,
            "result":userShortListed,
        
        });
    }
    }
   })

});


module.exports = router;
