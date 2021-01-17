const salesModel = require('../models/salesModel');
const userModel = require('../models/userModel');

async function createSale(newSale) {
  const { email, totalPrice, address, number, saleDate } = newSale;

  if (!email || !totalPrice || !address || !number || !saleDate) {
    throw { err: { code: 404, message: 'Missing information' } };
  }

  const user = await userModel.getByEmail(email);
  const userId = user.id;

  const addNewSale = salesModel.createSale(userId, totalPrice, address, number, saleDate);
  return addNewSale;
}

module.exports = { createSale };
