/**
 * Created by jack on 2018/4/17.
 */
/**
 * Created by jack on 2018/4/17.
 */
var mongoose = require('mongoose')

var Schema = mongoose.Schema;

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

/**
 var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});
**/

var UserSchema = new Schema({
    name: { type: String},
    phone: { type: Number}
})

var User = mongoose.model('User', UserSchema);

//create 增加

var user1 = new User();
user1.name = 'jack1';
user1.phone = 123456;
user1.save(function (err) {
    if (err) {
        console.log(err.message)
    }
})

var user2 = new User();
user2.name = 'jack2';
user2.phone = 234567;
user2.save(function (err) {
    if (err) {
        console.log(err.message)
    }
})

//查找
User.find(function (err, users) {
    if (err) {
        return console.error(err)
    }else {
        console.log(users)
    }
})

//