var passport = require('passport');
var mongoose = require('mongoose');
var User=mongoose.model('User');
var profile = mongoose.model('profile');
var plan=mongooose.model('plan');
module.exports.viewProfile=function(req,res){
    if(!req.payload._id){
        res.status(401).json({
            "message":"Unauthorized access"
        });
    }else{
        User.findById(req.payload._id).exec(function(err,user){
            res.status(200).json(user.profile);
        })

    }

};
module.exports.editProfile=function(req,res){
    if(!req.payload._id){
        res.status(401).json({
            "message":"Can't find profile"
        });

    }else{
        User.findById(req.payload._id).exec(function(err,user){
            if(err){
                throw err;
            };
            if(user){
                user.username=req.body.username;
                user.password=req.body.password;
                user.plan=req.body.plan;
                user.profile.name=req.body.profileName;                

            };
            user.save(function(err,updatedUser){
                if(err){
                    throw err;
                }else{
                    res.status(200).json(updatedUser);
                }

            });

        });
    };
};


