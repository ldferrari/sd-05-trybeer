const db = require('./connection');

const getProducts = async () => {
  const products = await db.execute('SELECT name, price, url_image FROM products');
  return products;
};

module.exports = {
  getProducts,
};
