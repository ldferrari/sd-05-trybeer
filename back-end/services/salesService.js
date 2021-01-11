const model = require('../models/salesModel');
const usersModel = require('../models/usersModel');
const salesProductsModel = require('../models/salesProductsModel');

const createSale = async (newSale) => {
  const { email, totalPrice, address, addressNumber, saleDate, products } = newSale;

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

  const insertedId = createdSale[0].insertId;

  products.forEach(async (product) => {
    await salesProductsModel.createSalesProducts(insertedId, product.product_id, product.quantity);
  });

  return createdSale;
};

const closeSale = async (body) => {
  const { id } = body;

  if (!id) {
    throw { err: { code: 404, message: 'sale id is invalid' } };
  }

  return model.closeSale(id);
};

const getByUserId = async (body) => {
  const { email } = body;

  if (!email) {
    throw { err: { code: 404, message: 'email is invalid' } };
  }

  const userFound = await usersModel.logIn(email);
  const { id } = userFound[0];

  const userSales = await model.getByUserId(id);

  if (!userSales) {
    throw { err: { code: 404, message: 'error' } };
  }

  return userSales[0];
};

const getAllOpen = async () => {
  const allSalesOpen = await model.getAllOpen();

  if (!allSalesOpen) {
    throw { err: { code: 404, message: 'error' } };
  }

  return allSalesOpen[0];
}

const getAllSales = async () => {
  const allSales = await model.getAll();

  if (!allSales) {
    throw { err: { code: 404, message: 'error' } };
  }

  return allSales[0];
}

module.exports = {
  createSale,
  closeSale,
  getByUserId,
  getAllOpen,
  getAllSales,
};
