var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var sponserAdSchema = new mongoose.Schema({
name : String,
details : String,
image:{data:Buffer,contentType:String}
});

mongoose.model('sponserAd' , sponserAdSchema);
