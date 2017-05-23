'use strict';

const Transport = require('../models').Transport;
const transports = require('../../data/transports.json');

module.exports = {
/**
 * retourne la liste des transports
 * @param {type} req
 * @param {type} res
 * @returns {Transport.listeTransports()}
 */
list(req, res) {
    return Transport
    .all()
    .then(transports => res.status(200).send(transports))
    .catch(error => res.status(400).send(error));
},

/**
 * crée un transport
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {nm$_transport.Transport}
 */
create(req, res){
     return Transport
      .create({
        title: req.body.title,
        coordinatesFromLat: req.body.coordinatesFromLat,
        coordinatesFromLon: req.body.coordinatesFromLon,
        coordinatesToLat: req.body.coordinatesToLat,
        coordinatesToLon: req.body.coordinatesToLon,
        vehicle : req.body.vehicle ,
        comment : req.body.comment,
        map : 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyAH7gbryCvy7UyxcJUFZ47rBfXQVc4O_Bk&mode='+ req.body.vehicle+'&origin=' + req.body.coordinatesFromLat + ','+ req.body.coordinatesFromLon +'&destination=' + req.body.coordinatesToLat +',' + req.body.coordinatesToLon
      })
      .then(transport => res.status(201).send(transport))
      .catch(error => res.status(400).send(error));
},
/**
 * retourne un transport
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {nm$_transport.Transport}
 */
retrieve(req, res){
  Transport.findById(req.params.id, function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
},

/**
 * met à jour le transport
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {nm$_transport.Transport}
 */
update(req, res){
  Transport.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, transport) {
    if (err)
      res.send(err);
    res.json(transport);
  });
},

/**
 * supprime le transportt avec son id 
 * @todo Implement this function.
 * @param {type} req
 * @param {type} res
 * @returns {message}
 */
destroy(req, res){
  Transport.remove({
    _id: req.params.id
  }, function(err, transport) {
    if (err)
      res.send(err);
    res.json({ message: 'Transport successfully deleted' });
  });
}
};



