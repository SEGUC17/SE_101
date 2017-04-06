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
