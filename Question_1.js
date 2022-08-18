var express = require('express');
var fs = require('fs');

var app = express();

app.listen(2000);

app.get('/', function (req , res)
{
    res.send("Hello World !");
});

console.log("Now listening to port 2000");