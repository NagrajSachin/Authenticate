var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    username : 
    {
        type : String,
        required : true,
        unique : true
    },
    password : 
    {
        type : String,
        required : true
    },
    admin : 
    {
        type : Boolean,
        default : false
    }
},
    {
        timestamps : true
});

var User = mongoose.model('user', user);

module.exports = User;