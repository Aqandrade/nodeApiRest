const router = require('express').Router();
const tableStore = require('./tableStore');

router.get('/', async (request, response) => {
  const storeList = await tableStore.list();
  response.status(200);
  response.send(
    JSON.stringify(storeList),
  );
});

module.exports = router;
