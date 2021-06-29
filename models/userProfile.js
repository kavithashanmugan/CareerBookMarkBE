

const mongoose = require('mongoose');



const userProfileSchema = mongoose.Schema({
    userId:String,
    emailId: String,
    fullName: String,
    phoneNumber: Number,
    website: String,
    jobTitle: String,
    location: String,
    summary: String,
    experience: String,
    education: String,
    skills:String,
    appliedJobs:[Object]

},
{ typeKey: '$type' });
//,resume:Buffer
module.exports = mongoose.model('UserProfile', userProfileSchema);