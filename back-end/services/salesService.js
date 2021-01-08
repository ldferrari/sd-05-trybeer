const model = require('../models/salesModel');
const usersModel = require('../models/usersModel');

const createSale = async (newSale) => {
  const { email, totalPrice, address, addressNumber, saleDate } = newSale;

  if (totalPrice <= 0) {
    throw { err: { code: 404, message: 'total price is invalid' } }; 
  }

  if (typeof address !== 'string' || !address.length) {
    throw { err: { code: 404, message: 'address is invalid' } };
  }

  if (typeof addressNumber !== 'number' || !addressNumber) {
    throw { err: { code: 404, message: 'address number is invalid' } };
  }

  if (!saleDate) {
    throw { err: { code: 404, message: 'date is invalid' } };
  }

  const dateArray = saleDate.split('/');
  const dataValidFormat = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);

  if (!email) {
    throw { err: { code: 404, message: 'email is invalid' } };
  }

  const userFound = await usersModel.logIn(email);
  const { id } = userFound[0];

  const createdSale = await model.createSale(id, totalPrice, address, addressNumber, dataValidFormat);

  if (!createdSale) {
    throw { err: { code: 401, message: 'error' } };
  }

  return createdSale;
};

const closeSale = (body) => {
  const { id } = body;

  if (!id) {
    throw { err: { code: 404, message: 'sale id is invalid' } };
  }

  return model.closeSale(id);
};

module.exports = {
  createSale,
  closeSale,
};
