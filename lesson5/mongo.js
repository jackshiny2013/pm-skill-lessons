/**
 * Created by jack on 2018/4/17.
 */
var mongoose = require('mongoose')

var db = 'mongodb://127.0.0.1/test';
mongoose.connect(db, {
    server: { poolSize: 20 }
}, function (err) {
    if (err) {
        console.log('connect to %s error:', db, err.message)
        process.exit(1)
    } else {
        console.log('connected')
    }
})