const { response } = require('express');
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const UserProfile = require('../models/userProfile');

router.get('/getMatchingJobsByProfile', function(req, res) {
    //console.log("requesting for user",req.params)
    const userId = req.body.userId;
    //const filter = { "userId": JSON.stringify(selectedId)};
     UserProfile.find({}).exec(function(err, result) {
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