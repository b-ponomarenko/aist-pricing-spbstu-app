'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Boilers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      diameter: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      shellHeight: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      bottomHeight: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      shellThickness: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      pipeLength: {
        type: Sequelize.DOUBLE,
        allowNull: false
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Boilers');
  }
};