function UserDAO(connection){

	this._connection = connection;

}

/*o método query do plugin mysql para node esperar um callback com dois parametros: erro e result*/

UserDAO.prototype.getUsers = function(callback){

	this._connection.query("SELECT * FROM user", callback);

}

module.exports = function() {

	return UserDAO;

}