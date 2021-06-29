//apply for a job,
const express = require("express");
const router = express.Router();

const job = require("../models/job");
const UserProfile = require("../models/userProfile");

router.post("/applyJob",async function (req, res) {
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  console.log("htting apply jobs hetrrer....................... job");
  const appliedObj = {"appliedJobs":{"jobId":req.body.jobId,"jobStatus":"Applied","jobTitle":req.body.jobTitle,"jobLocation":req.body.jobLocation,"Company":req.body.Company,"appliedOn":new Date()}}
  console.log("appliedObj",appliedObj)
  const applicantObj = {"appliedCandidates":{"userId":req.body.userId,"userStatus":"applied","fullName":req.body.fullName,"userJobTitle":req.body.userJobTitle,"userLocation":req.body.userLocation,"appliedOn":new Date()}}
  console.log("applicantObj",applicantObj)

  const userAppliedJob = UserProfile.findOneAndUpdate({"userId":req.body.userId },{"$push":appliedObj}).exec();
  console.log("userapplied",userAppliedJob)
  const jobApplicants = job.findOneAndUpdate({"jobId": req.body.jobId},{"$push":applicantObj}).exec();
  console.log("jobApplicants",jobApplicants)
  Promise.all([userAppliedJob, jobApplicants])
  .then((result) => {
    console.log("result is...result is...",result)
    return res.status(200).json({
      "status": true,
      "result":result
  });
  }).catch((err) => {
    return res.status(400).json({"status":false,"err":err});
  });
});


module.exports = router;
