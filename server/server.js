const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var path = require('path');
const database = require('./config/database');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json


app.use(express.static(path.join(__dirname, '../client')));
const mongoDB = database.url;

//Connect to Mangoose
mongoose.connect(mongoDB,{
});
const db = mongoose.connection;

// When successfully connected
db.on('connected', function() {
     console.log('Mongo DB connection open for DB');
});

require('./routes')(app);

app.listen(port ,() => console.log(`Server started on ${port}`));