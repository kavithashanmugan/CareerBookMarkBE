
const express = require('express');
const app = express();
var mongoose = require('mongoose');
const http = require('http');
var cors = require('cors');
const dotenv = require('dotenv').config();


//mongodb://localhost:27017/careerBookMarkDB
var mongoDB = process.env.MONGODB_URI;
console.log("mongodb",mongoDB)
mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
    console.log("Connection Successful!");
});

const bodyParser = require("body-parser");

var createProfile = require('./routes/createProfile');
var signUp = require('./routes/signUp');
var signUpFireBase = require('./routes/signUpFireBase');
var getProfile = require('./routes/getProfile');
var getJobById = require('./routes/getJobById');
var login = require('./routes/login');
var postJob = require('./routes/postJob');
var getAllJobs = require('./routes/getAllJobs');
var getAllProfiles = require('./routes/getAllProfiles');
var signUpCompanyFireBase = require('./routes/signUpCompanyFireBase');
var searchJobs = require('./routes/searchJobs');
var updateProfile = require('./routes/updateProfile');
var getMatchingJobsbySkills = require('./routes/getMatchingJobsbySkills'); 
var createCompanyProfile = require('./routes/createCompanyProfile');
var getCompanyProfile = require('./routes/getCompanyProfile');
var updateCompanyProfile = require('./routes/updateCompanyProfile');
var applyJob = require('./routes/applyJob');
var getJobByHirerId = require('./routes/getJobByHirerId');
var getOpenJobsByHirer = require('./routes/getOpenJobsByHirer');
var getClosedJobsByHirer = require('./routes/getClosedJobsByHirer');
var getAppliedJobs = require('./routes/getAppliedJobs');
var getAppliedCandidates = require('./routes/getAppliedCandidates');
var closeJob = require('./routes/closeJob');
var searchPostedJobs = require('./routes/searchPostedJobs');
var testApi = require('./routes/testApi');
var shortListCandidates = require('./routes/shortListCandidates');
var rejectCandidates = require('./routes/rejectCandidates');
var getRejectedCandidates = require('./routes/getRejectedCandidates');
var getShortListedCandidates = require('./routes/getShortListedCandidates');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};
app.use(allowCrossDomain);
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use("/api", createProfile);
app.use("/api",signUpFireBase);
app.use("/api",signUp);
app.use("/api",getProfile);
app.use("/api",login);
app.use("/api",postJob);
app.use("/api",getAllJobs);
app.use("/api",getJobById);
app.use("/api",getAllProfiles);
app.use("/api",signUpCompanyFireBase);
app.use("/api",searchJobs);
app.use("/api",updateProfile);
app.use("/api",updateCompanyProfile);
app.use("/api",getMatchingJobsbySkills);
app.use("/api",createCompanyProfile);
app.use("/api",getCompanyProfile);
app.use("/api",applyJob);
app.use("/api",getJobByHirerId);
app.use("/api",getOpenJobsByHirer);
app.use("/api",getClosedJobsByHirer);
app.use("/api",getAppliedJobs);
app.use("/api",getAppliedCandidates);
app.use("/api",getRejectedCandidates);
app.use("/api",closeJob);
app.use("/api",searchPostedJobs);
app.use("/api",testApi);
app.use("/api",shortListCandidates);
app.use("/api",rejectCandidates);
app.use("/api",getShortListedCandidates);

const port = process.env.PORT|| 4000;;
console.log(port)
app.listen(port,()=>{console.log(`app listening on port ${port}`)
});


