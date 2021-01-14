const model = require('../Models/detailModel');

const getDetails = async (saleId) => model.getDetails(saleId);

module.exports = {
  getDetails,
};
