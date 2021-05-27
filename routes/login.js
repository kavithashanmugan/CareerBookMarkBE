const express = require('express');
const bcrypt = require('bcrypt');
const user = require('../models/user');
const router = express.Router();

router.post('/login', async(req, res) => {
    // try{
    const emailId = req.body.emailId;
    const password = req.body.password;
    const User = await user.findOne({ emailId });
    console.log("user", User);
    if (!User) {
        res.statusCode = 404;
    } else {
        const compare = await bcrypt.compare(password, User.password);
        console.log("compare", compare)
        if (compare) {
            res.status(200).json({ "status": true });

        } else {
            res.status(400).json({ error: "Invalid Password" });
        }
    }
    //  }
    //catch(err){
    //     res.send({"error":err});
    // }
})

module.exports = router;