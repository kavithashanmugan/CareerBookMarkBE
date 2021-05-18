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
var cors = require('cors')


mongoose.connect("mongodb://localhost:27017/myDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const bodyParser = require("body-parser");

var userRoutes = require('./routes/createProfile');
var signUp =  require('./routes/signUp');
var getUser = require('./routes/getProfile');

// bodyParser = {
//   json: {limit: '50mb', extended: true},
//   urlencoded: {limit: '50mb', extended: true}
// }
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain);
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ limit:'100mb', extended: true }));
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//       return res.status(200).json({});
//     }
//     next();
//   });
  
app.use("/createUser",userRoutes);
app.use("/signUp",signUp);
app.use("/getUser",getUser);
// app.post("/hello",function(req,res){
//   res.send('Hello World');
// })

const port = process.env.PORT || 3000;

 const server = http.createServer(app);
//app.listen(port, console.log(`Example app listening on port ${port}!`));

 server.listen(port,console.log("hitting... 3000"));
// set our port
// const port = 3000;
// configuration ===========================================

// config files
// var db = require('./config/db');
// console.log("connecting--",db);
// mongoose.connect(db.url); //Mongoose connection created

// frontend routes =========================================================
// app.get('/', (req, res) ⇒ res.send('Welcome to Tutorialspoint!'));

//defining route
// app.get('/tproute', function (req, res) {
//    res.send('This is routing for the application developed using Node and Express...');
// });

// sample api route
// grab the student model we just created
// var Student = require('./app/models/student');
// app.get('/api/students', function(req, res) {
   // use mongoose to get all students in the database
   // Student.find(function(err, students) {
      // if there is an error retrieving, send the error.
      // nothing after res.send(err) will execute
      // if (err)
      //    res.send(err);
      // res.json(students); // return all students in JSON format
//    });
// });
// startup our app at http://localhost:3000
// app.listen(port, () ⇒ console.log(`Example app listening on port ${port}!`));