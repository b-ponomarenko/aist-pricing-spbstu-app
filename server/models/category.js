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
        // associations can be defined here
      }
    }
  });
  return Category;
};