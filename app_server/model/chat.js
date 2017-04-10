var mongoose = require('mongoose');
var ObjectId = mongoose.SchemaTypes.ObjectId;

var chatSchema = new mongoose.Schema({
	user: {type: ObjectId, ref: UserSchema, required:true,unique:true},
	admin:{type: ObjectId, ref: UserSchema, required:true},
	messages: [{type: ObjectId, ref: messageSchema}]
});

mongoose.model('Chat', chatSchema);
