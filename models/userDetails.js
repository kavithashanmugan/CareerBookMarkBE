//this is not used anymore

const mongoose = require('mongoose');


const userDetailsSchema = mongoose.Schema({
    fullName: String,
    phoneNumber: Number,
    website: String,
    emailId: String,
    jobTitle: String,
    location: String,
    summary: String,
    experience: String,
    education: String,
    appliedJobs:[String]

});
//,resume:Buffer
module.exports = mongoose.model('UserDetails', userDetailsSchema);