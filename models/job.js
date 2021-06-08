const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/careerBookMarkDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
    console.log("Connection Successful!");
});

const jobSchema = mongoose.Schema({
    jobId: Number,
    jobTitle: String,
    Company: String,
    companyDesc: String,
    jobLocation: String,
    jobType: String,
    jobStartDate: String,
    jobEndDate: String,
    jobRequirements: String,
    jobSummary: String,
    jobPostedBy: String
});

module.exports = mongoose.model('Jobs', jobSchema);