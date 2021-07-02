//apply for a job,
const express = require("express");
const router = express.Router();

const job = require("../models/job");
const UserProfile = require("../models/userProfile");

router.post("/shortListCandidates",async function (req, res) {
 console.log("hitting shortlist candidates")

   await job.findOne({"jobId": req.body.jobId},{"appliedCandidates":{$elemMatch: {"userId": req.body.userId}}},{}).exec(function(err, result) {
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
        console.log(result)
        console.log("hello",result.appliedCandidates[0]["userStatus"]);
        result.appliedCandidates["userStatus"] = "shortListed"
        res.status(200).json({
            "status": true,
            "result":result,
        
        });
    }
    }
   })

});


module.exports = router;
