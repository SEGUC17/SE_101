var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var planSchema = new mongoose.Schema({
name : String,
details : String
});

mongoose.model('Plan' , planSchema, 'Plans');
