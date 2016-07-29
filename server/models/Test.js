var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = Schema({
	name: String
});

mongoose.model('Test', testSchema);
