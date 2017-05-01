
var mongoose=require('mongoose');
var passport = require('passport');
module.exports={
  User:require('../model/User'),
  Profile:require('../model/profile'),
  Product:require('../model/product'),
  Plan:require('../model/plan'),
  Chat: require('../model/chat'),
  Message: require('../model/message')

};
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
//this method allows visitors to register on the system,input:username&password,output:success or error message
module.exports.register = function(req, res) {

  if(!req.body.username || !req.body.password) {
    res.json({ success: false, message: 'Please enter username and password.' });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password,
      //admin:true
    });

    // Attempt to save the user
    newUser.save(function(err) {
      if (err) {
        //in case the user already registered before error message is thrown
        return res.json({ success: false, message: 'That email address already exists.'});
      }
      //in cas of a new user , the user will be saved and a success message appears
      res.json({ success: true, message: 'Successfully created new user.' });
    });
  }

};
//this method allows clients to access the system to buy,select,view pages and edit their profiles
//input:username and password
//output: token is generated
//err: if inputs are given wrong, then an error message is thrown
//success: token is generated for the user, and a message appears
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
        if(user.admin)
        {
            res.json({ success: true, token: 'JWT ' + token , admin : true, id : user.id});
        }
        else
        res.json({ success: true, token: 'JWT ' + token, admin:false , id : user.id});

      }

    }
  });

};
