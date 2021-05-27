const { response } = require('express');
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const UserDetails = require('../models/userDetails');

router.post('/getProfile', async function(req, res) {
    console.log("user...connected..saved ..hello..")
    var emailId = req.body.emailId;

    await UserDetails.find(({
        emailId: emailId
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