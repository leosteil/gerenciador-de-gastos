var mysql = require('mysql');

var connMySQL = function(){
	
	return mysql.createConnection({
		host : '',
		user : '',
		password : '',
		database : ''
	});

}

module.exports = function(app) {

	return connMySQL;

}
