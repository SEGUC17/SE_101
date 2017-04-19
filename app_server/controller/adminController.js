var passport = require('passport');
var mongoose = require('mongoose');
var User=mongoose.model('User');
var Product=mongoose.model('Product');
var Plan=mongoose.model('Plan');
var sponserAd=mongoose.model('sponserAd');
var multiparty=require('multiparty');
var multer=require('multer');
var upload=multer({dest:'uploads/'});
var fs=require('fs');
var path=require('path');

//this method views the app users,input: request users , output: error or document
module.exports.viewUsers=function(req,res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});
}else{
	User.find(function(err,doc){
    if(err){
    	console.log(err);
    }
    console.log(doc);
	res.json({message:doc})
	});
}
});
};
//this method deoetes users, input: user ID to search with,output: err message or deletes the user and sends a success message
module.exports.deleteUser=function(req,res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});
}else{
		user.remove(function(err){

			res.json({message:"User Successfully deleted"});
		});

}
});
};
//this method adds plans to the system, input:user id to search with ,
//if the user is not an admin it throws an error,
//else it takes the name of the plan and its details as an input, adds the plan and then throws a success message
module.exports.addPlan=function(req,res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		}else{
			var pl=new Plan({
				name:req.body.name,
				details:req.body.details
			});
			pl.save(function(err){
				if(err){
					throw err
				};
				console.log('plan added');
				res.json({message:pl});
			});
		}
		//}
	});
};


//this method adds products to the system, input:user id to search with ,
//if the user is not an admin it throws an error,
//else it takes the name,detals and price of the product as an input, adds the product and then throws a success message
	module.exports.addProduct=function(req,res){
		if(!req.user._id){
			res.status(401).json({
				"message": "Please login first"
			});
		}
		User.findById(req.user._id, function(err,user){
			if(err){
						throw err
					};
			 if(user.admin==false){
				console.log('cannot access');
				res.json({message:"Cannot access"});

			 }else{
				 var n =req.body.name;
				 var d = req.body.details;
				 var p =req.body.price;
				var pr=new Product({
					name:n,
					details:d,
					price:p
				});
				pr.save(function(err){
					if(err){
						throw err
					};
					console.log('product added');
					res.json({message:pr});
				});
	    };
	    });

	  };

//this method adds sponsors Ads to the system, input:user id to search with ,
//if the user is not an admin it throws an error,
//else it takes the name,details and image as an input,adds the AD and then throws a success message

module.exports.addSponserAd=function(req,res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
			var sa=new sponserAd({
			name:req.body.name,
			details:req.body.details,
			img:{
				data:fs.readFile(req.body.image),
				contentType:'image/png'
			}
		});
	sa.save(function(err){
			if(err){
				throw err
			};
			console.log('sponserAd added');
		});
	//}
	}
});
};
//this method edits existing products,input:user id and product id, output: error message or success message
module.exports.editProduct = function(req, res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
			Product.findById(req.body.product_id, function(err,product){
				if(err) throw err;
				if(req.body.name!=null)
					product.name = req.body.name;
				if(req.body.price!=null)
					product.price = req.body.price;
				if(req.body.details!=null)
					product.details = req.body.details;
					product.save(function(err){
		        if(err) throw err;
		        console.log("Product edited");
		        res.status(200).json(product);
	});
});
}
});
};

module.exports.editPlan = function(req, res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
			Plan.findById(req.body.plan_id, function(err,plan){
				if(err) throw err;
				if(req.body.name!=null)
					plan.name = req.body.name;
				if(req.body.price!=null)
					plan.details = req.body.details;
					plan.save(function(err){
		        if(err) throw err;
		        console.log("Plan edited");
		        res.status(200).json(plan);
	});
});
}
});
};

module.exports.editSponserAd = function(req, res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
			sonserAd.findById(req.body.sonserAd_id, function(err,Ad){
				if(err) throw err;
				if(req.body.name!=null)
					Ad.name = req.body.name;
				if(req.body.price!=null)
					Ad.details = req.body.details;
					if(req.body.img !=null)
					Ad.img =
						{
							data:fs.readFile(req.body.image),
							contentType:'image/png'
						}

					sonserAd.save(function(err){
		        if(err) throw err;
		        console.log("sonserAd edited");
		        res.status(200).json(Ad);
	});
});
}
});
};

module.exports.deletePlan = function(req, res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
			 Plan.remove({_id: req.body.id}, function(err){
				 if(err){
 							throw err
 						}
						res.status(200).json('Done');

					});
				}
		});
};

module.exports.deleteProduct = function(req, res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
			 Product.remove({_id: req.body.id}, function(err){
				 if(err){
 							throw err
 						}
						res.status(200).json('Done');

					});
				}
		});
};

module.exports.deleteUser = function(req, res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
				User.remove({_id: req.body.id}, function(err){
				 if(err){
 							throw err
 						}
						res.status(200).json('Done');

					});
				}
		});
};

module.exports.deleteSponserAd = function(req, res){
	if(!req.user._id){
		res.status(401).json({
			"message": "Please login first"
		});
	}
	User.findById(req.user._id, function(err,user){
		if(err){
					throw err
				};
		 if(user.admin==false){
			console.log('cannot access');
			res.json({message:"Cannot access"});

		 }else{
			 sponserAd.remove({_id: req.body.id}, function(err){
				 if(err){
 							throw err
 						}
						res.status(200).json('Done');

					});
				}
		});
};
