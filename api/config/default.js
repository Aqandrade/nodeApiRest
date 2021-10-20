const databaseSettings = require('./config.json');
const apiSettings = require('./apiSettings.json');

const config = { ...databaseSettings, ...apiSettings };

module.exports = config;
