var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = Schema({
	title: String
});

mongoose.model('Tag', tagSchema);
