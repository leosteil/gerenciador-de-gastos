module.exports.users = function(application, req, res) {

	var connection = application.config.dbConnection();
	var userModel = new application.src.models.UserDAO(connection);

	userModel.getUsers( function(error, result){

		if (error) return res.send({ error: true, data: "bug", message: 'users list.' });
        return res.send({ error: false, data: results[0], message: 'users list.' });

	});

}