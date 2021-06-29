const express = require('express')
const router = express.Router();

const job = require('../models/job');

router.post('/getJobByHirerId', async function(req, res) {
    console.log("getting all jobs...")
    const filter = {hirerId: req.body.hirerId}
console.log("hirerId",req.body.hirerId)
    await job.find(filter).exec(function(err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
            res.status(200).json({
                "status": true,
                "result":result
            });
        }
    });
    })




module.exports = router;