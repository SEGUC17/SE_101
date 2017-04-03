var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var productSchema = new mongoose.Schema({
name : String,
price : Double,
details: String
});

mongoose.model('Product' , productSchema);
