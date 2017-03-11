'use strict';
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Category.hasMany(models.Component, {
          foreignKey: 'categoryId',
          as: 'components',
        });
        Category.hasMany(models.CategoryAttribute, {
          foreignKey: 'categoryId',
          as: 'attributes',
        })
      }
    }
  });
  return Category;
};