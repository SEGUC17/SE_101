var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var p = require('mongoose').model(profileSchema);

var clientSchema = new mongoose.Schema({
username : {type:String, required:true},
client_basket : String, //this does not make sense
client_history : String,
profile : p
});

mongoose.model('Client' , clientSchema);
