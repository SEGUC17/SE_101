var mongoose = require('mongoose')
    Schema=mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var UserSchema = require('./User')
var messageSchema = require('./message')

var chatSchema = new mongoose.Schema({
	user: {type: ObjectId, ref: UserSchema, required:true,unique:true},
	admin:{type: ObjectId, ref: UserSchema, required:true},
	messages: [{type: ObjectId, ref: messageSchema}]
});

var Chat=mongoose.model('Chat', chatSchema);
module.exports=Chat;
