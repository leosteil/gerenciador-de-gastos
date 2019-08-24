function AccountDAO(connection){

	this._connection = connection;

}

/*o método query do plugin mysql para node esperar um callback com dois parametros: erro e result*/

AccountDAO.prototype.getAccounts = function(callback){

	this._connection.query("SELECT * FROM account", callback);

}

AccountDAO.prototype.getAccount = function(idAccount, callback){
	console.log(idAccount);
	this._connection.query(`SELECT * FROM account WHERE id = ${idAccount} `, callback);

}


module.exports = function() {

	return AccountDAO;

}