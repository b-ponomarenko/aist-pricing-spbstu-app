'use strict';
module.exports = function(sequelize, DataTypes) {
  const Component = sequelize.define('Component', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Component.belongsTo(models.Category, {
          foreignKey: 'categoryId',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        Component.hasMany(models.ComponentAttributeValue, {
          foreignKey: 'componentId',
          as: 'values'
        });
        Component.hasMany(models.Configuration, {
          foreignKey: 'componentId',
          as: 'component'
        })
      }
    }
  });
  return Component;
};