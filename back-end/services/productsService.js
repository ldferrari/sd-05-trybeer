const model = require('../models/productsModel');

const getAll = async () => {
  const products = await model.getProducts();
  return products[0];
};
// const getProductById = async (productId) => {
//   if (!productId) {
//     return {
//       error: true,
//       statusCode: 400,
//       message: 'Product not found.',
//     };
//   }
//   const product = await model.getProductById(productId);

// }
module.exports = {
  getAll,
};
