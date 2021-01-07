const { array } = require('@hapi/joi');
const products = require('../controllers/products.controller');
const connection = require('./connection.model');

const getProducts = () =>
  connection.query('SELECT * FROM products').then((array) => array[0]);

const getProductById = (id) =>
  connection
    .query('SELECT * FROM products WHERE id = ?', [id])
    .then((array) => array[0]);

const addProduct = ({ name, price, url_image }) =>
  connection.query(
    'INSERT INTO products (name, price, url_image) VALUES (?,?,?)',
    [name, price, url_image],
  );

const deleteProduct = (id) =>
  connection.query('DELETE FROM products WHERE id = ?', [id]);

module.exports = { getProducts, getProductById, addProduct, deleteProduct };
