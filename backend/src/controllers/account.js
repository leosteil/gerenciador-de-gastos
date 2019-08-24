module.exports.accountsGet = function(application, req, res) {

	var connection = application.config.dbConnection();
	var accountModel = new application.src.models.AccountDAO(connection);

	accountModel.getAccounts( function(error, result){

		if (error) return res.send({ error: true, data: "bug", message: 'accounts list.' });
        return res.send({ error: false, data: result, message: 'accounts list.' });

	});

}

module.exports.accountsGetOne = function(application, req, res) {

	var connection = application.config.dbConnection();
	var accountModel = new application.src.models.AccountDAO(connection);

	accountModel.getAccount(req.params.accountId, function(error, result){

		if (error) return res.send({ error: true, data: "bug", message: 'account.' });
        return res.send({ error: false, data: result, message: 'account.' });

	});

}