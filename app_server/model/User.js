var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var pr = require('mongoose').model(profileSchema);
var prod = require('mongoose').model(productSchema);

var UserSchema = new mongoose.Schema({
username : {type:String, required:true,unique:true},
password : {type:String, required:true},
user_basket : [prod], //only products the user has selected but hasnt bought yet are in this list
user_history : [String],
profile : pr, // the plan is in the profile 
admin:{type:boolean}
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

mongoose.model('User' , UserSchema);
