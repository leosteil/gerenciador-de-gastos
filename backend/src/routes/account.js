module.exports = function(application){
    
    application.get('/accounts', function (req, res) {
        console.log(req.body);
        application.src.controllers.account.accountsGet(application, req, res);
    });

    application.get('/accounts/:accountId', function(req, res){
		application.src.controllers.account.accountsGetOne(application, req, res);
    });

    application.post('/accounts', function (req, res) {
        application.src.controllers.account.accountsPost(application, req, res);
    });

    application.put('/accounts/:accountId', function(req, res){
		application.src.controllers.account.accountsPut(application, req, res);
    });
    
    
    application.delete('/accounts/:accountId', function(req, res){
		application.src.controllers.account.accountsDelete(application, req, res);
    });

}