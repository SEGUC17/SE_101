var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var pr = require('mongoose').model(profileSchema);

var UserSchema = new mongoose.Schema({
username : {type:String, required:true,unique:true},
password : {type:String, required:true},
user_basket : [mongoose.Schema.Types.Mixed],
user_history : [String],
profile : pr,
admin:{type:boolean}
} );
UserSchema.methods.generateJwt=function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(expiry.getTime() / 1000),
  },"secret",
);
};

mongoose.model('User' , UserSchema);
