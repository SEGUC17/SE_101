var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var pr = require('mongoose').model(productSchema);
var pl = require('mongoose').model(planschema);

var profileSchema = new mongoose.Schema({
name : String
products : [pr], //this is the bought history not the cart
plan : pl
});

mongoose.model('Profile' , profileSchema);
