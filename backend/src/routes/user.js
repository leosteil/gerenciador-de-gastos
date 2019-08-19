module.exports = function(application){
    application.get('/users', function (req, res) {
        application.src.controllers.user.users(application, req, res);
    });
}