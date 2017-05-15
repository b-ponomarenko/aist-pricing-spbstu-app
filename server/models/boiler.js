'use strict';
module.exports = function(sequelize, DataTypes) {
  const Boiler = sequelize.define('Boiler', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    diameter: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    shellHeight: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    bottomHeight: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    shellThickness: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    pipeLength: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    shellPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    bottomPrice: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    refusePrice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Boiler.hasMany(models.Configuration, {
          foreignKey: 'boilerId',
          as: 'configurations'
        });
        Boiler.belongsTo(models.Component, {
          foreignKey: 'metal',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Boiler;
};