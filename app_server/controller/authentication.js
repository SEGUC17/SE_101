
var mongoose=require('mongoose');
var passport = require('passport');
module.exports={
  User:require('../model/User'),
  Profile:require('../model/profile'),
  Product:require('../model/product'),
  Plan:require('../model/plan'),
  
};
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {

  if(!req.body.username || !req.body.password) {
    res.json({ success: false, message: 'Please enter username and password.' });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({ success: false, message: 'That email address already exists.'});
      }
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }

};
module.exports.login = function(req, res) {
   User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // Check if password matches
      if(req.body.password!=user.password){
        res.send({ success: false, message: 'Authentication failed. Password is wrong.' });
      }else{
        var token =user.generateJwt();
        res.json({ success: true, token: 'JWT ' + token });

      }
    
    }
  });

};

