// const products = require('../controllers/products.controller');
const connection = require('./connection.model');
// prettier-ignore
const getProducts = () => connection.query('SELECT * FROM products').then((array) => array[0]);
// prettier-ignore
const getProductById = (id) => (
  connection
    .query('SELECT * FROM products WHERE id = ?', [id])
    .then((array) => array[0]));
// prettier-ignore
const addProduct = ({ name, price, urlImage }) => (
  connection.query(
    'INSERT INTO products (name, price, url_image) VALUES (?,?,?)',
    [name, price, urlImage], // url_image precisava ser em camelCase *lint
  ));
// prettier-ignore
const deleteProduct = (id) => (
  connection.query('DELETE FROM products WHERE id = ?', [id]));

module.exports = { getProducts, getProductById, addProduct, deleteProduct };
