//this is not used any more
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    fullName: String,
    emailId: String,
    password: String

});
//,resume:Buffer
module.exports = mongoose.model('User', userSchema);