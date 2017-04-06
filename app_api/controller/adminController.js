var passport = require('passport');
var mongoose = require('mongoose');
var User=mongoose.model('User');

module.exports.viewUsers=function(req,res){
	User.find(function(err,doc){
    if(err){
    	console.log(err);
    }
    console.log(doc);
	});

};

module.exports.deleteUser=function(req,res){
	User.findById(req.body.id).exec(function(err,user){
		user.remove(function(err){
			if(err){
				throw err
			};
			console.log('User successfully deleted!');
		});

	});

};


