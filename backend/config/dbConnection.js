//import {settings} from "./config/bdSetings.js";
var mysql = require('mysql');
//const settings = require("bdSetings.js");

var connMySQL = function(){
	
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '',
		database : 'gerenciador-de-gastos'
	});

}

module.exports = function(app) {

	return connMySQL;

}
