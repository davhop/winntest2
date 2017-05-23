'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transport = sequelize.define('Transport', {
    title: { type: DataTypes.STRING, allowNull: false},
    coordinatesFromLat: { type: DataTypes.FLOAT, allowNull: false},
    coordinatesFromLon: { type: DataTypes.FLOAT, allowNull: false},
    coordinatesToLat: { type: DataTypes.FLOAT, allowNull: false},
    coordinatesToLon: { type: DataTypes.FLOAT, allowNull: false},
    vehicle: { type: DataTypes.STRING, allowNull: false},
    comment: { type: DataTypes.STRING, allowNull: false},
    departNom: { type: DataTypes.STRING, allowNull: false},
    arrivNom: { type: DataTypes.STRING, allowNull: false},
    map: { type: DataTypes.FLOAT, allowNull: false}
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Transport;
};