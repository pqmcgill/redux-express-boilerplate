var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
	name: String
});

mongoose.model('User', userSchema);
