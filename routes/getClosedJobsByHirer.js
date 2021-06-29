const express = require('express')
const router = express.Router();

const job = require('../models/job');

router.post('/getClosedJobsByHirer', async function(req, res) {
    console.log("getting all jobs...")
    const filter = {hirerId: req.body.hirerId,jobStatus:"Closed"}
console.log("hirerId",req.body.hirerId)
    await job.find(filter).exec(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            if (result.length == 0){
                res.status(200).json({
                    "status": true,
                    "result":result,
                    "message":"No Closed Jobs"
                }); 
            }
            else{
            console.log(result)
            res.status(200).json({
                "status": true,
                "result":result,
            
            });
        }
        }
    });
    })




module.exports = router;