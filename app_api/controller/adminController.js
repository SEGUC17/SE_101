var passport = require('passport');
var mongoose = require('mongoose');
var User=mongoose.model('User');
var sponserAd=mongoose.model('sponserAd');
var plan=mongoose.model('plan');
var multiparty=require('multiparty');
var multer=require('multer');
var upload=multer({dest:'uploads/'});
var fs=require('fs');
var path=require('path');

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


