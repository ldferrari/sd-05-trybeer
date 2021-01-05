const Joi = require('@hapi/joi');
const rescue = require('express-rescue');
const productsModel = require('../models/products.model');

const getAllProducts = rescue (async (req, res, next) => {
  const allProducts = await productsModel.getProducts()
  if (!allProducts) throw new Error('Não existem produtos')
  console.log(allProducts);
  req.data = allProducts;
  next();
});

const getProductById = rescue (async (req, res, next) => {
  const { id } = req.params;
  const product = await productsModel.getProductById(id)
  if (!product) throw new Error('Não tem este produto')
  req.data = product;
  next();
});

// const addProduct = rescue (async (req, res, next) => {
//   const { name, price, url_image } = req.body;
//   const 
// })

module.exports = { getAllProducts, getProductById };
