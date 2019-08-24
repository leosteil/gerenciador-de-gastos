/*Neste arquivo estão setadas as configuraçoes básicas do projeto e no final a variável app que recebe a criação do express é retornada
1 - Express: framework para desenvolvimento web
2 - Consign: modulo utilizado para facilitar a importação dos arquivos
3 - Body Parser: modulo utilizado para isso req.body
4 - Express Validator: modulo utilizado para a validação de dados enviados em formulários*/


var express = require('express');
var consign = require('consign');
var expressValidator = require('express-validator');

var app = express();

/*Aqui são setadas a view engine que será o ejs e onde são encontradas as views do sistema*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*onde são encontrados os arquivos assets do sistema (js, css e imagens)*/
app.use(express.static('./app/public'))
/*Setando o bodyParser como midleware de requisições e respostas*/
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded());

/*Setando o express-validator como midleware de validação*/
//app.use(expressValidator());

app.use(function(req, res, next){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

/*CONSIGN = importacao automatica dos arquivos. Evita de ficar dando um monte de require*/
consign()
	.include('src/routes')
	.then('./config/dbConnection.js')
	.then('src/models')
	.then('src/controllers')
	.into(app);

module.exports = app;


/*CommonJS = padrão de exportação de módulos. No ES6 é diferente*/
/*As importações do consign evitam o seguinte:
var rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app);*/