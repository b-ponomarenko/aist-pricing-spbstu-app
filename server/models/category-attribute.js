'use strict';
module.exports = function(sequelize, DataTypes) {
  const CategoryAttribute = sequelize.define('CategoryAttribute', {}, {
    classMethods: {
      associate: function(models) {
        CategoryAttribute.belongsTo(models.Category, {
          foreignKey: 'categoryId',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
        CategoryAttribute.belongsTo(models.Attribute, {
          foreignKey: 'attributeId',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        });
      }
    }
  });
  return CategoryAttribute;
};