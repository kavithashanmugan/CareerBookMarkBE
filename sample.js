// var express = require('express');
// var bodyparser = require('body-parser');

// const mongoose = require('mongoose');
// const app = express();

// const signUp = require('./routes/signUp')
// server.use(bodyparser.json());


// app.use("/api/signUp",signUp)

// module.exports = app;


// module.exports = app;
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const myPlaintextPassword = 'Prajin@2019';

// bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//         console.log("hash",hash)
//         bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//             // result == true
//             console.log("result",result)
//         });
//     });
// });


function getSkills(res){
    var ski = res.split(",");
    return ski;
}
let skills = "apple,orange"
console.log(getSkills(skills));