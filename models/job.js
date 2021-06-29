const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/careerBookMarkDB", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

// var db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));

// db.once("open", function() {
//     console.log("Connection Successful!");
// });

const jobSchema = mongoose.Schema({
    hirerId:String,
    jobId: String,
    jobTitle: String,
    Company: String,
    companyDesc: String,
    salaryRange:String,
    jobLocation: String,
    jobType: String,
    jobStartDate: String,
    jobRequirements: String,
    jobSummary: String,
    jobPostedDate:String,
    jobStatus:String,
    appliedCandidates:[Object],
    shortlistedCandidates:[Object],
    rejectedCandidates:[Object]
});

module.exports = mongoose.model('Jobs', jobSchema);