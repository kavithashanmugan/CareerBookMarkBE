const express = require('express')
const router = express.Router();

const job = require('../models/job');

router.get('/getJobById/:jobId', async function(req, res) {
    console.log("requesting for job",JSON.stringify(req.params.jobId))
    const filter = {jobId: req.params.jobId};
console.log("filter...",filter)

    await job.findOne(filter).exec(function(err, result) {
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