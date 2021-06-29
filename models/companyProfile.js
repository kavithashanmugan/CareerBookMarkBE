

const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://cbUser:comit2021@cluster0.z5xgv.mongodb.net/CareerBookMarkDB?retryWrites=true&w=majority", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

// var db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));

// db.once("open", function() {
//     console.log("Connection Successful!");
// });

const hirerProfileSchema = mongoose.Schema({
    hirerId:String,
    companyName: String,
    companyType: String,
    companyWebsite: String,
    Industry: String,
    location: String,
    companyDetails: String,
    employees:Number

},
{ typeKey: '$type' });
//,resume:Buffer
module.exports = mongoose.model('HirerProfile', hirerProfileSchema);