var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/demo');
var Schema = mongoose.Schema;   
var userScheMa = new Schema({
	name: String,
	password: String
}); 
exports.user = db.model('users', userScheMa); 