var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var productSchema = new mongoose.Schema({
name : String,
price : Number,
details: String
});

var product=mongoose.model('Product' , productSchema);
module.exports=product;
