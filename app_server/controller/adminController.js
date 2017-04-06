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
	
	
	module.exports.addProduct=function(req,res){
		User.findById(req.payload._id).exec(function(err,user){
			if(!user.admin){
				console.log('cannot access');
			}else{
				var pr=new product({
					name:req.body.name,
					details:req.body.details,
					price:req.body.price
				});
				pr.save(function(err){
					if(err){
						throw err
					};
					console.log('product added');
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


module.exports.editProduct = function(req, res){
	User.findById(req.payload._id).exec(function(err,user){
		if(err) throw err;
		if(!user.admin){
			console.log('cannot access');
		}else{
			Product.findById(req.params.product_id, function(err,product){
				if(err) throw err;
				if(req.params.productName!=null)
					product.name = req.params.productName;
				if(req.params.productPrice!=null)
					product.price = req.params.productPrice;
				if(req.params.productDetails!=null)
					product.details = req.params.productDetails;
					product.save(function(err){
		        if(err) throw err;
		        console.log("Product edited");
		        res.status(200).json(updatedProduct);
		      });
			});

			}
		});

	};

