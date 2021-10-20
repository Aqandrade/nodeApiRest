const express = require('express');
const config = require('config');
const log = require('debug')('api:main');
const storeRouter = require('./routes/Store');

const app = express();

app.use(express.json());
app.use('/api/store', storeRouter);

app.listen(config.get('api.port'), () => {
  log(`Server up on port: ${config.get('api.port')}`);
});
