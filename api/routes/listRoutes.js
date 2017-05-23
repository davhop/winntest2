'use strict';
module.exports = function(app) {
  var listeTrns = require('../controller/listController');


  /**  Routes */
  app.route('/api/transports')
    .get(listeTrns.list)
    .post(listeTrns.create);


  app.route('/api/transports/:id')
    .get(listeTrns.read)
    .put(listeTrns.update)
    .delete(listeTrns.delete);
};


