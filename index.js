const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// set up our express app
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
    });

// const cors = require('cors');
// app.use(cors ({
//     origin: "http://localhost:3001"
// }));
// app.use(cors ({
//     origin: "Https://bidprosapp.herokuapp.com"
// }));

// connect to mongodb

// let db = process.env.MONGOURI;
mongoose.connect("mongodb+srv://jeff:Solene@bidprosdata.mqlza.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

// hosted at https://jeffmcrockett.github.io/bidprosapi/