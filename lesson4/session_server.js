/**
 * Created by jack on 2018/4/13.
 */
var express = require('express'); // 首先引入 express-session 这个模块
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var router = express.Router();
app.set('views engine', 'html');
app.engine('html', require('ejs-mate'));
app.listen(5000);
app.use(router);

app.use(cookieParser('jack2018'));
//解析cookie secret为‘jack2016’的cookie，可不可以不写secret？ 不写会报错


// 按照上面的解释，设置 session 的可选参数
app.use(session({
    secret:'jack2018', // 建议使用 128 个字符的随机字符串，这里不写secret的话cookie存储的是不加密的sessionid
    name:'jacks',    //cookie名字，这里cookie存的内容是用secret加密的sessionid，
    cookie: {maxAge:60*2000},//cookie设置，maxAge设置时间好像受到限制，太小直接没效，设置的够大无论是60*60还是60*60*24*12好像都是固定的4小时，这里有点疑惑。
}));

/* GET home page. */
router.get('/',function(req,res,next) {
   res.render('index',{title:'Express'});
});