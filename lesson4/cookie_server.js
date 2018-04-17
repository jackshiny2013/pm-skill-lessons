/**
 * Created by jack on 2018/4/13.
 */
var express = require('express');

// 首先引入 cookie-parser 这个模块
var cookieParser = require('cookie-parser');
var app = express();
app.listen(3000);

// 使用 cookieParser 中间件，cookieParser(secret, options)
var count =0;
app.use(cookieParser());
app.get('/', function (req, res) {

// 如果请求中的 cookie 存在 isVisit, 则输出 cookie
// 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟

    if (req.cookies.jack) {
        console.log(req.cookies.jack);
        count+=1;
        res.send("welcome count："+count);
    } else {
        res.cookie('jack', 'content', {maxAge: 60 * 1000});
        res.send("no cookie");
    }
});