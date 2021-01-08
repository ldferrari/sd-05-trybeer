const database = require('./connection');

const getAllProducts = async () => {
  const [products] = await database.execute('SELECT * FROM products');
  return products;
};

module.exports = {
  getAllProducts,
};
