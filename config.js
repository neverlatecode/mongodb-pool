var mongo = require('./lib/MyMongo.js').MyMongo;

var db = new mongo('localhost',27017,'operation');

exports = module.exports = {
	db_name:'operation',
	db:db

};
