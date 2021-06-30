const { response } = require("express");
const express = require("express");
var dotenv = require("dotenv");
const router = express.Router();

const job = require("../models/job");

router.post("/searchPostedJobs", async function (req, res) {
  // const

  var jobSearch = req.body.jobKeyWords;
  var hirerId = req.body.hirerId;
  const hirerObj = { hirerId: hirerId };
  console.log("jobsearch", jobSearch);

  await job.find(
    {
      $and: [
        { $or: [hirerObj] },
        { $or: [{ "jobTitle": {$regex: `${jobSearch}`,$options:"i"} },{"jobType": {$regex: `${jobSearch}`,$options:"i"} },{ "jobLocation": {$regex: `${jobSearch}`,$options:"i"} }] }
      ],
    },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.status(200).json({
          status: true,
          result: result,
        });
      }
    }
  );
});

module.exports = router;
