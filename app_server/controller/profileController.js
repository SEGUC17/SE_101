var passport = require('passport');
var mongoose = require('mongoose');
var User=mongoose.model('User');
var profile = mongoose.model('Profile');
var plan=mongoose.model('Plan');

//allows the user to view his/her profile
module.exports.viewProfile=function(req,res){
    if(!req.user._id){
        res.status(401).json({
            "message":"Unauthorized access"
        });
    }else{
        User.findById(req.user._id).exec(function(err,user){
            res.status(200).json(user);
        })

    }

};
//allows the user to edit his/her profile
module.exports.editProfile=function(req,res){
    if(!req.user._id){
        res.status(401).json({
            "message":"Can't find profile"
        });

    }else{
        User.findById(req.user._id).exec(function(err,user){
            if(err){
                throw err;
            };
            if(user){
                user.username=req.body.username;
                user.password=req.body.password;
                               

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


