var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

var client_ = require('mongoose').model(clientSchema);
var admin_ =require('mongoose').model(adminSchema);

var registeredUserSchema = new mongoose.Schema({ // I do not know how we will connect this to the client or admin
username : {type:String, required:true},
password : {type:String, required:true},

return jwt.sign({
//_id : this.id, //mesh mota2aked
username : this.id,
password : this.password,
exp : parseInt(expiry.getTime()/1000),
});
});

mongoose.model('RegisteredUser' , registeredUserSchema);
