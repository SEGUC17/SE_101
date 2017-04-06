var mongoose = require('mongoose');
var User = mongoose.model('User');
var Plan=mongoose.model('plan')
module.exports.selectPlan=function(req,res){

  User.findById(req.payload._id).exec(function(err,user){

    Plan.findById(req.params.plan_id,function(err,plan){
      var pl=new Plan({
        name:plan.name,
        details:plan.details
      });
      user.plan=pl;
      user.save(function(err){
        if(err){
          throw err;
        };
        res.status(200);
        console.log('plan selected');
      });

    });

  })
}

module.exports.viewHistory = function(req,res){
  UserindById(req.payload._id).exec(function(err,user){
    if(err){
      console.log("oops something went wrong");
      sendJSONresponse(res,404,err); //not sure
      return;
    }else{
      var history= user.user_history;
      sendJSONresponse(res, 200, history);
    }

  });
};
module.exports.viewProducts=function(req,res){
  var p=[];
    product.find(function(err,doc){
      if(err){
        console.log(err);
      }
      for(var i=0;i<doc.length;i++){
        p.push(doc[i]);        
      };
      //res.render('products',{products:p});

    });
};
module.exports.viewPlan=function(req,res){
  var p=[];
    Plan.find(function(err,doc){
      if(err){
        console.log(err);
      }
      for(var i=0;i<doc.length;i++){
        p.push(doc[i]);
        

      };
      //res.render('plan',{plans:p});

    });
};
