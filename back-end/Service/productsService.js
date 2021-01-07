const model = require('../Models/productsModel');

const getAll = async () => model.getAll();

module.exports = {
  getAll,
};
