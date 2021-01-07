const connection = require('./connection');

const getAllProducts = async () => connection.execute('SELECT * FROM products;');

module.exports = {
  getAllProducts,
};
