'use strict';
module.exports = function(sequelize, DataTypes) {
  const Configuration = sequelize.define('Configuration', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
       Configuration.belongsTo(models.Boiler, {
         foreignKey: 'boilerId',
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       });
      Configuration.belongsTo(models.Component, {
        foreignKey: 'componentId',
        as: 'component',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      });
      }
    }
  });
  return Configuration;
};