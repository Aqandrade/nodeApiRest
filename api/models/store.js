const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Store extends Model {}

Store.init({
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  damage: DataTypes.INTEGER,
  minLevel: DataTypes.INTEGER,
  active: DataTypes.ENUM('1', '0'),
}, {
  sequelize,
  modelName: 'Store',
});

module.exports = Store;
