const connection = require('./connection');

async function getAllProducts() {
  const products = connection.execute('SELECT * FROM products');
  return products;
}

module.exports = { getAllProducts };
