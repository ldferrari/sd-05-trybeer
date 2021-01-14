const db = require('./connection');

const getProducts = async () => {
  const products = await db.execute('SELECT id, name, price, url_image FROM products');
  return products;
};

// const getProductById = async (productId) => {
//   const product = await db.execute('SELECT name, price from products WHERE id= ?', [productId]);
//   return product;
// }
module.exports = {
  getProducts,
};
