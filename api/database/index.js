const Sequelize = require('sequelize');
const config = require('config');

const connection = new Sequelize(
  config.get('mysql.database'),
  config.get('mysql.user'),
  config.get('mysql.password'),
  {
    host: config.get('mysql.host'),
    dialect: 'mysql',
  },
);

try {
  connection.authenticate();
  console.log('connection has been stablished successfully');
} catch (error) {
  console.log('Unable to connect to the database: ', error);
}

module.exports = connection;
