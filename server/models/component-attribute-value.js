'use strict';
module.exports = function(sequelize, DataTypes) {
  const ComponentAttributeValue = sequelize.define('ComponentAttributeValue', {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        ComponentAttributeValue.belongsTo(models.Attribute, {
          foreignKey: 'attributeId',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
        ComponentAttributeValue.belongsTo(models.Component, {
          foreignKey: 'componentId',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return ComponentAttributeValue;
};