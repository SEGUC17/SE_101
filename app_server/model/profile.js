var mongoose = require('mongoose'),
    Schema=mongoose.Schema;
var jwt = require('jsonwebtoken');
  var Product=require('../model/product');
  var Plan=require('../model/plan');
  var sponserAd=require('../model/sponserAd');
  
var profileSchema = new mongoose.Schema({
name : String,
products : [{type: Schema.Types.ObjectId, ref: 'Product'}], //this is the bought history not the cart
plan:{type: Schema.Types.ObjectId, ref: 'Plan'}  
});

mongoose.model('Profile' , profileSchema);
