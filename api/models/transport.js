'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transport = sequelize.define('Transport', {
    title: { type: DataTypes.STRING, allowNull: false},
    coordinatesFromLat: { type: DataTypes.DECIMAL, allowNull: false},
    coordinatesFromLon: { type: DataTypes.DECIMAL, allowNull: false},
    coordinatesToLat: { type: DataTypes.DECIMAL, allowNull: false},
    coordinatesToLon: { type: DataTypes.DECIMAL, allowNull: false},
    vehicle: { type: DataTypes.STRING, allowNull: false},
    comment: { type: DataTypes.TEXT, allowNull: false},
    departNom: { type: DataTypes.STRING, allowNull: true},
    arrivNom: { type: DataTypes.STRING, allowNull: true},
    map: { type: DataTypes.STRING, allowNull: false}
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Transport;
};