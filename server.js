
let express = require('express');
let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: true });
let server = express();

/**
 * Ajout middlewares (bodyparser, express.static, en-tête de réponses, et formatage json)
 */
server.use(bodyParser.json())
    .use(express.static(__dirname + '/public'))
    .use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*")
      .header("Access-Control-Allow-Headers", "X-Requested-With")
      .setHeader('Content-Type', 'application/json');
      next();
    })
    .set('json spaces',0);

/**
 * Configuration des routes
 * @type Module listRoutes|Module listRoutes
 */
var routes = require('./api/routes/listRoutes')
routes(server);
/**
 * démarre le serveur
 */
server.listen(3000, function() {
     console.log('%s listening at %s', server.name, server.url);
});


