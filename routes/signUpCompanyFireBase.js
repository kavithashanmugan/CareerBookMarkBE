const express = require("express");
const company = require("../models/companyProfile");
const router = express.Router();

router.post("/signUpCompanyFireBase", async(req, res) => {
    console.log("hitting company...");

  console.log("res is....",req.body)
    const userId = req.body.hirerId;
    const Company = new company({ "userId":userId });
    if (!(req.body )) {
        return res
            .status(400)
            .send({ error: "userId required" });
    }
    if (await company.findOne({ userId: userId })) {
        return res
            .status(400)
            .send({ "error": `userId  already taken`, "status": false })
    } else {
        await Company.save();
    }

    res.status(200).send({
        "status": true
    });
});
module.exports = router;