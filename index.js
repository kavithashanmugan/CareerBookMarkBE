// const http = require('http');
// const app = require('./app');
// const port = process.env.PORT||3000;

// app.set('port',port);
// const server = http.createServer(app);

// server.listen(port);

// modules =================================================

const express = require('express');
const app = express();
var mongoose = require('mongoose');
const http = require('http');
var cors = require('cors');


mongoose.connect("mongodb://localhost:27017/careerBookMarkDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const bodyParser = require("body-parser");

var createProfile = require('./routes/createProfile');
var signUp = require('./routes/signUp');
var signUpFireBase = require('./routes/signUpFireBase');
var getProfile = require('./routes/getProfile');
var login = require('./routes/login');
var postJob = require('./routes/postJob');
var getAllJobs = require('./routes/getAllJobs');
var getAllProfiles = require('./routes/getAllProfiles');

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
app.use("/api", signUp);
app.use("/api", getProfile);
app.use("/api", login);
app.use("/api", postJob);
app.use("/api", getAllJobs);
app.use("/api",getAllProfiles)
const port = process.env.PORT|| 4000;;
console.log(port)
app.listen(port,()=>{console.log(`app listening on port ${port}`)
});


