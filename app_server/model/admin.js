var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var  adminSchema = new mongoose.Schema({
name : String,
username : {type:String, required:true}
});

mongoose.model('Admin' , adminSchema);
