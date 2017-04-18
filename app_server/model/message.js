var mongoose = require('mongoose')
    Schema = mongoose.Schema;;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var UserSchema = require('./User')

var messageSchema = new mongoose.Schema({
	text: { type: String, required: true },
	time: { type: Date, default: Date.now, required: true},
	user: [{type: ObjectId, ref: UserSchema}]
});

mongoose.model('Message', messageSchema, 'Messages');
