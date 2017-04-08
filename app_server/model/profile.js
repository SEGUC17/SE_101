var mongoose = require('mongoose'),
    Schema=mongoose.Schema;
var jwt = require('jsonwebtoken');
var pr = require('mongoose').model(productSchema);
var pl = require('mongoose').model(planSchema);

var profileSchema = new mongoose.Schema({
name : String,
products : [{type: Schema.Types.ObjectId, ref: 'Product'}], //this is the bought history not the cart
plan:{type: Schema.Types.ObjectId, ref: 'Plan'}  
});

mongoose.model('Profile' , profileSchema);
