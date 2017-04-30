var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product=mongoose.model('Product');
var Plan=mongoose.model('Plan')
//this method allows the user to select his/her own plan
module.exports.selectPlan=function(req,res){

 

    Plan.findById(req.body.plan_id,function(err,plan){
      console.log(plan);
       User.findById(req.user._id).exec(function(err,user){
      user.plan=plan;
      user.save(function(err){
        if(err){
          throw err;
        };
        
        console.log('plan selected');
         res.json({message: "Plan selected"});
      });

    });

  })
}

//tgis method allows the user to view his/her history of transactions(purchases, plans selections...etc)
module.exports.viewHistory = function(req,res){
  UserfindById(req.user._id).exec(function(err,user){
    if(err){
      console.log("oops something went wrong");
      sendJSONresponse(res,404,err); //not sure
      return;
    }else{
      var history= user.user_history;
        res.status(200).json(history);
    }

  });
};

//allows users to view the availabile products on the system
module.exports.viewProducts=function(req,res){
  var p=[];
    Product.find(function(err,doc){
      if(err){
        console.log(err);
      }else{
      for(var i=0;i<doc.length;i++){
        p.push(doc[i]);        
      };
        res.status(200).json(p);
      //res.render('products',{products:p});
      }
    });
};
//allows the users to view the availabile plans on the system 
module.exports.viewPlan=function(req,res){
  var p=[];
    Plan.find(function(err,doc){
      if(err){
        console.log(err);
      }else{
      for(var i=0;i<doc.length;i++){
        p.push(doc[i]);
        
      };
        res.status(200).json(p);
      //res.render('plan',{plans:p});
      }
    });
};
