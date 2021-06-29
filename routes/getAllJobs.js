const express = require('express')
const router = express.Router();

const job = require('../models/job');

router.get('/getAllJobs', async function(req, res) {
    console.log("getting all jobs...")


    await job.find(({

    }), function(err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    }).then(result => {
        res.json(result)
    })

})


module.exports = router;