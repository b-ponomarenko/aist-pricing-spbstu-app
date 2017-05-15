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
        allowNull: true
      },
      shellPrice: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      bottomPrice: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      refusePrice: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      metal: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Components',
          key: 'id',
          as: 'metal',
        }
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