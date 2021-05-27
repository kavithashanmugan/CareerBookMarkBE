const express = require("express");
const bcrypt = require("bcrypt");
const user = require("../models/user");
const router = express.Router();

router.post("/signUp", async(req, res) => {
    console.log("hitting...");

    const fullName = req.body.fullName;
    const emailId = req.body.emailId;
    const password = req.body.password;
    const User = new user({ fullName, emailId, password });
    if (!(req.body.fullName && req.body.emailId && req.body.password)) {
        return res
            .status(400)
            .send({ error: "Fullname,emailId and password required" });
    }
    if (await user.findOne({ emailId: emailId })) {
        return res
            .status(400)
            .send({ "error": `username ${User.emailId} already taken`, "status": false })
    } else {
        const salt = bcrypt.genSaltSync(10);
        User.password = await bcrypt.hash(User.password, salt);
        await User.save();
    }

    res.status(200).send({
        "status": true
    });
});
module.exports = router;