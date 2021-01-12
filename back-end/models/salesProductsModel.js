const connection = require('./connection');

const createSalesProducts = async (saleId, productId, quantity) => connection.execute(
  'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?,?,?);',
  [saleId, productId, quantity],
);

const getSaleDetails = (saleId) => connection.execute('SELECT * FROM sales_products WHERE sale_id = ?;', [saleId]);

module.exports = {
  createSalesProducts,
  getSaleDetails,
};
