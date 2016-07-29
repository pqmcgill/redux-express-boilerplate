var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = Schema({
	msg: String,
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	likes: [
		{ type: Schema.Types.ObjectId, ref: 'User' }
	]
});

mongoose.model('Post', postSchema);
