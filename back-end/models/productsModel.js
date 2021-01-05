const connection = require('./connection');

const getAllProducts = async () => await connection.execute('SELECT * FROM products;');

module.exports = {
  getAllProducts,
};
