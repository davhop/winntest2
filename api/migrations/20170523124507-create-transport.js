'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coordinatesFromLat: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      coordinatesFromLon: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      coordinatesToLat: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      coordinatesToLon: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      vehicle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      comment: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      map: {
        allowNull: false,
        type: Sequelize.STRING
      },
      departNom: {
        allowNull: true,
        type: Sequelize.STRING
      },
      arrivNom: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface/*, Sequelize*/) => {
    return queryInterface.dropTable('Transports');
  }
};