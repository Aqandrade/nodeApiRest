const Sequelize = require('sequelize');
const config = require('config');
const log = require('debug')('api:main');

const connection = new Sequelize(
  config.get('development.database'),
  config.get('development.username'),
  config.get('development.password'),
  {
    host: config.get('development.host'),
    dialect: 'mysql',
  },
);

try {
  connection.authenticate();
  log('connection has been stablished successfully');
} catch (error) {
  log('Unable to connect to the database: ', error);
}

module.exports = connection;
