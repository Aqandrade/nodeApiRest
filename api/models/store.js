'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
    }
  };
  Store.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    damage: DataTypes.INTEGER,
    minLevel: DataTypes.INTEGER,
    active: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};