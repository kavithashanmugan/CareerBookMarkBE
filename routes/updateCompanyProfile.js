//create Profile

// const express=()

const express = require('express')

const router = express.Router();

const   CompanyProfile = require('../models/companyProfile');

router.post('/updateCompanyProfile', (req, res, next) => {
    console.log("updating company profile...",req.body)

    const companyProfile = {
        
        
       
        "companyName": req.body.companyName,
        "companyType": req.body.companyType,
        "companyWebsite": req.body.companyWebsite,
        "Industry": req.body.Industry,
        "location": req.body.location,
        "companyDetails": req.body.companyDetails,
        "employees":req.body.employees
    };
    const userId = {
        "userId": req.body.userId
    }

    //_id:new mongoose.Types.ObjectId(),
    //,resume:req.files.resume
    console.log("company Profile...",{ "$set":companyProfile})
    CompanyProfile.findOneAndUpdate(userId,companyProfile).exec(function (err, docs) {
if (err){
console.log(err)
res.status(500).send(err);
}
else{
console.log("Updated Company : ", docs);
res.status(200).send({
            "status": true,
            "result":docs
        });
}
});

     

});

module.exports = router;
