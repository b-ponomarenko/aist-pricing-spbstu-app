'use strict';
module.exports = function(sequelize, DataTypes) {
  const Attribute = sequelize.define('Attribute', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Attribute.hasMany(models.CategoryAttribute, {
          foreignKey: 'attributeId',
          as: 'attributes',
        })
      }
    }
  });
  return Attribute;
};