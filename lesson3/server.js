/**
 * Created by jack on 2018/4/12.
 */
var express = require('express');
var app = express();
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
var server = app.listen(8081, function (req, res) {
    console.log("hello world")
})

app.get('/', function (req, res) {
    res.render('index',{title:'Express'});

})
