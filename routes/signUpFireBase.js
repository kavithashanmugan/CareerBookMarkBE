const express = require("express");
const user = require("../models/userProfile");
const router = express.Router();

router.post("/signUpFireBase", async(req, res) => {
    console.log("hitting firebase...");

  console.log("res is....",req.body)
    const userId = req.body.userId;
    const User = new user({ "userId":userId });
    if (!(req.body )) {
        return res
            .status(400)
            .send({ error: "userId required" });
    }
    if (await user.findOne({ userId: userId })) {
        return res
            .status(400)
            .send({ "error": `userId  already taken`, "status": false })
    } else {
        await User.save();
    }

    res.status(200).send({
        "status": true
    });
});
module.exports = router;