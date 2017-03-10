'use strict';
module.exports = function(sequelize, DataTypes) {
  const Attribute = sequelize.define('Attribute', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Attribute;
};