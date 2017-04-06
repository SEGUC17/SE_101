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
module.exports.addPlan=function(req,res){
	User.findById(req.payload._id).exec(function(err,user){
		if(!user.admin){
			console.log('cannot access');
		}else{
			var pl=new plan({
				name:req.body.name,
				details:req.body.details
			});
			pl.save(function(err){
				if(err){
					throw err
				};
				console.log('plan added');
			});
		}
		}
	});

module.exports.addSponserAd=function(req,res){
	User.findById(req.payload._id).exec(function(err,user){
		if(!user.admin){
			console.log('cannot access');
		}else{
			var sa=new sponserAd({
			name:req.body.name,
			details:req.body.details,
			img:{
				data:fs.readFile(req.file.path),
				contentType:'image/png'
			}
		});
	sa.save(function(err){
			if(err){
				throw err
			};
			console.log('sponserAd added');
		});
	}
	}
};



