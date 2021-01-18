const salesModel = require('../models/salesModel');
const userModel = require('../models/userModel');

async function createSale(newSale) {
  const { email, totalPrice, address, number, saleDate } = newSale;

  if (!email || !totalPrice || !address || !number || !saleDate) {
    throw new Error({ code: 404, message: 'Missing information' });
  }

  const user = await userModel.getByEmail(email);
  const { id } = user;

  const addNewSale = salesModel.createSale(id, totalPrice, address, number, saleDate);
  return addNewSale;
}

async function getSalesById(body) {
  const { email } = body;

  if (!email) throw new Error({ code: 404, message: 'E-mail is invalid' });

  const user = await userModel.getByEmail(email);
  const { id } = user;

  const sales = await salesModel.getSalesById(id);

  if (!sales) throw new Error({ code: 404, message: 'User has placed no orders yet' });

  return sales[0];
}

async function getAdminSales() {
  const sales = await salesModel.getAdminSales();
  return sales[0];
}

module.exports = { createSale, getSalesById, getAdminSales };
