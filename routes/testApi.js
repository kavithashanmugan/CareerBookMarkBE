const { response } = require('express');
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');

const UserProfile = require('../models/userProfile');

router.get('/testApi', function(req, res) {
   res.send({"result":"hellloooooo "})
    
    

})


module.exports = router;