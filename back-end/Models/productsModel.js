const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT id, name, price, url_image FROM products');
  return products;
};

module.exports = {
  getAll,
};
