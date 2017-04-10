var mongoose = require('mongoose');
var ObjectId = mongoose.SchemaTypes.ObjectId;

var chatSchema = new mongoose.Schema({
	user: {type: ObjectId, ref: UserSchema, required:true,unique:true},
	admin:{type: ObjectId, ref: UserSchema, required:true},
	messages: [{type: ObjectId, ref: messageSchema}]
});

mongoose.model('Chat', chatSchema);

var mongoose = require('mongoose');
var ObjectId = mongoose.SchemaTypes.ObjectId;

var messageSchema = new mongoose.Schema({
	text: { type: String, required: true },
	time: { type: Date, default: Date.now, required: true},
	user: [{type: ObjectId, ref: UserSchema}]
});

mongoose.model('Message', messageSchema);
