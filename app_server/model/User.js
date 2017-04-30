var mongoose = require('mongoose'),
    Schema=mongoose.Schema;
var jwt = require('jsonwebtoken');
 var Profile=require('../model/profile');
  var Product=require('../model/product');
  var Plan=require('../model/plan');
  var sponserAd=require('../model/sponserAd');
  
var UserSchema = new mongoose.Schema({
username : {type:String, required:true,unique:true},
password : {type:String, required:true},
user_basket : [{type: Schema.Types.ObjectId, ref: 'Product'}], //only products the user has selected but hasnt bought yet are in this list
user_history : [String],
profile : {type: Schema.Types.ObjectId, ref: 'Profile'}, // the plan is in the profile 
admin:{type:Boolean},
plan:{type: Schema.Types.ObjectId, ref: 'Plan'}
} );
UserSchema.methods.generateJwt=function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(expiry.getTime() / 1000),
  },"secret"
);
};



var User=mongoose.model('User' , UserSchema);
module.exports=User;
