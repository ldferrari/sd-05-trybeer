const model = require('../Models/admDetailModel');

const getDetails = async (saleId) => model.getDetails(saleId);

module.exports = {
  getDetails,
};
