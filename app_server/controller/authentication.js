var passport = require('passport');
var mongoose = require('mongoose');


var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports={
  User:require('../model/User'),
  Profile:require('../model/profile'),
  Product:require('../model/product'),
  Plan:require('../model/plan'),
  
};
var User = mongoose.model('User');
module.exports.register = function(req, res) {

  var user = new User();

  user.username = req.body.username;
  user.password = req.body.password;
  user.admin=false;

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

};
module.exports.login = function(req, res) {
  console.log(req.body);
  User.find({},function(err,doc){
    console.log(doc);
  })
 
if(!req.body.username || !req.body.password) {
sendJSONresponse(res, 400, {
"message": "All fields required"
});
return;
}
User.find({},function(err,doc){
    console.log(doc);
    for(var i=0;i<doc.length;i++){
        if(doc[i].username==req.body.username && doc[i].password==req.body.password){
          var token;
          token = doc[i].generateJwt();
          sendJSONresponse(res, 200, {"token" : token});

        }
        

      };
  });

};

//passport authentication
/*module.exports.login = function(req, res) {


  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })

};*/
