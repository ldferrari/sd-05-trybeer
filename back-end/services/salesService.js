const model = require('../models/salesModel');
const usersModel = require('../models/usersModel');
const salesProductsModel = require('../models/salesProductsModel');

const createSale = async (newSale) => {
  const { email, totalPrice, address, addressNumber, saleDate, products } = newSale;
  console.log(newSale);
  if (totalPrice <= 0) {
    const err = { err: { code: 404, message: 'total price is invalid' } };
    throw err;
  }

  if (typeof address !== 'string' || !address.length) {
    const err = { err: { code: 404, message: 'address is invalid' } };
    throw err;
  }

  if (!addressNumber) {
    const err = { err: { code: 404, message: 'address number is invalid' } };
    throw err;
  }

  if (!saleDate) {
    const err = { err: { code: 404, message: 'date is invalid' } };
    throw err;
  }

  const dateArray = saleDate.split('/');
  const dataValidFormat = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);

  if (!email) {
    const err = { err: { code: 404, message: 'email is invalid' } };
    throw err;
  }

  const userFound = await usersModel.logIn(email);
  const { id } = userFound[0];

  const createdSale = await model.createSale(
    id,
    totalPrice,
    address,
    addressNumber,
    dataValidFormat,
  );

  if (!createdSale) {
    const err = { err: { code: 401, message: 'error' } };
    throw err;
  }

  const insertedId = createdSale[0].insertId;

  products.forEach(async (product) => {
    await salesProductsModel.createSalesProducts(insertedId,
      product.product_id || product.id, product.quantity);
  });

  return createdSale;
};

const closeSale = async (body) => {
  const { id } = body;

  if (!id) {
    const err = { err: { code: 404, message: 'sale id is invalid' } };
    throw err;
  }

  return model.closeSale(id);
};

const getByUserId = async (body) => {
  const { email } = body;

  if (!email) {
    const err = { err: { code: 404, message: 'email is invalid' } };
    throw err;
  }

  const userFound = await usersModel.logIn(email);
  const { id } = userFound[0];

  const userSales = await model.getByUserId(id);

  if (!userSales) {
    const err = { err: { code: 404, message: 'error' } };
    throw err;
  }

  return userSales[0];
};

const getAllOpen = async () => {
  const allSalesOpen = await model.getAllOpen();

  if (!allSalesOpen) {
    const err = { err: { code: 404, message: 'error' } };
    throw err;
  }

  return allSalesOpen[0];
};

const getAllSales = async () => {
  const allSales = await model.getAll();

  if (!allSales) {
    const err = { err: { code: 404, message: 'error' } };
    throw err;
  }

  return allSales[0];
};

const getSaleById = async (id) => {
  if (!id) {
    const err = { err: { code: 404, message: 'invalid id' } };
    throw err;
  }

  const sale = await model.getSaleById(id);

  if (!sale) {
    const err = { err: { code: 404, message: 'sale not found' } };
    throw err;
  }

  return sale[0];
};

module.exports = {
  createSale,
  closeSale,
  getByUserId,
  getAllOpen,
  getAllSales,
  getSaleById,
};
