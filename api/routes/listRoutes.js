'use strict';
module.exports = function(app) {
  var listeTrns = require('../controller').transport;


  /**  Routes */
  app.route('/api/transports')
    .get(listeTrns.list)
    .post(listeTrns.create);


  app.route('/api/transports/:id')
    .get(listeTrns.retrieve)
    .put(listeTrns.update)
    .delete(listeTrns.destroy);
};


