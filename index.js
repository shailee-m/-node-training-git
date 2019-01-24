var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var things = require('./routes/things')(express)
/* Require users.js here */


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function(req, res){
   res.send("Hello world!");
});

/* Use users route here */

app.use('/things',things)
app.listen(3000,()=>{
    console.log("Listening on 3000")
});