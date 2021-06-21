const { response } = require("express");
const express = require("express");
const router = express.Router();

const job = require("../models/job");
const UserProfile = require("../models/userProfile");

async function getSkills(userId) {
    console.log("hitting get skills")
  const filter = { userId: userId };
  await UserProfile.findOne(filter)
    .exec(function (err, result) {
      if (err) {
        console.log(err);
      } else {
          console.log("res",result)
        return result;
      }
    })
    // .then((result) => {
    //   return result.skills;
    // }
   // );
}
router.post("/getMatchingJobsbySkills", async (req, res)=> {
  console.log("getting all jobs...");
  var skills = await getSkills(req.body.userId);
  console.log("skillsss",skills)
   let skillsArray = ["Hyperion"]

  var jobResults = [];
  skillsArray
    .forEach(function (skills) {
      jobResults.push(
        job.find({
          $or: { jobRequirements: { $regex: `${skills}`, $options: "i" } },
        })
      );
      console.log(jobResults);
    })
    // .then((result) => {
    //   res.send(result);
    // })
    // .catch((error) => {
    //   res.status(500).send("one of the queries failed", error);
    // });
});

module.exports = router;
