const Store = require('../../models/store');

const list = async () => {
  const storeList = Store.findAll();
  return storeList;
};

module.exports = {
  list,
};
