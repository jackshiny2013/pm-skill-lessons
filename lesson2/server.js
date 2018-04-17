/**
 * Created by jack on 2018/4/12.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
})

var server = app.listen(8081, function (req, res) {
    console.log("hello world")
})