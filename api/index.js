const express = require('express');
const config = require('config');
const log = require('debug')('api:main');

const app = express();

app.use(express.json());

app.listen(config.get('api.port'), () => {
  log(`Server up on port: ${config.get('api.port')}`);
});
