'use strict';

const Transport = require('../model/transport.js');
const transports = require('../../data/transports.json');

/**
 * retourne la liste des transports
 * @param {type} req
 * @param {type} res
 * @returns {Transport.listeTransports()}
 */
exports.list = (req, res) => {
    let liste = [];
    liste = Transport.listeTransports(transports.transports);
    res.status(200).json(liste);
};

/**
 * crée un transport
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {nm$_transport.Transport}
 */
exports.create = (req, res) => {
  let new_transport = new Transport(req.body);
  new_transport.save(function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport); 
  });
};
/**
 * retourne un transport
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {nm$_transport.Transport}
 */
exports.read = (req, res) => {
  Transport.findById(req.params.id, function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};

/**
 * met à jour le transport
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {nm$_transport.Transport}
 */
exports.update = (req, res) => {
  Transport.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
};

/**
 * supprime le transportt avec son id 
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {message}
 */
exports.delete = (req, res) => {
  Transport.remove({
    _id: req.params.id
  }, function(err, transport) {
    if (err)
      res.send(err);
    res.json({ message: 'Transport successfully deleted' });
  });
};



