
const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('promise');

const urlencodedParser = bodyParser.urlencoded({ extended: true });
const app = express();


/**
 * Ajout middlewares (bodyparser, express.static, en-tête de réponses, et formatage json)
 */
app.use(bodyParser.json())
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
var routes = require('./api/routes/listRoutes');
routes(app);

module.exports = app;



