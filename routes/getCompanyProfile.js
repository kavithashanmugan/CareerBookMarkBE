
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');


const CompanyProfile = require('../models/companyProfile');

router.get('/getCompanyProfile/:hirerId', function(req, res) {
    console.log("requesting for company user",JSON.stringify(req.params.hirerId))
    //const selectedId = req.body.userId;
    const filter = {hirerId: req.params.hirerId};
   // console.log("filter",filter);
   CompanyProfile.findOne(filter).exec(function(err, result) {
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