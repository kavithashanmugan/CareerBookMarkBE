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

const userSchema = mongoose.Schema({

    fullName: String,
    emailId: String,
    password: String

});
//,resume:Buffer
module.exports = mongoose.model('User', userSchema);