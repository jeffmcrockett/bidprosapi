const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// set up our express app
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

// connect to mongodb

let db = process.env.MONGOURI;
mongoose.connect(db);
mongoose.Promise = global.Promise;

app.use(express.json());

// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('Ready! Listening for requests...');
});

// hosted at https://jeffmcrockett.github.io/bidprosapi/