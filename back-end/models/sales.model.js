const connection = require('./connection.model');

const insertSale = (data) => connection.query('INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status) VALUES (?)  ', [data]);

const insertProductSale = (data) => connection.query('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES ? ', [data]);

const updateStatus = (status, id) => connection.query('UPDATE sales SET status = ? WHERE id = ?', [status, id]);

const orderById = (id) => connection.query('SELECT * FROM sales WHERE user_id = ? ORDER BY status, sale_date', [id]).then((orders) => orders[0]);

const allSales = () => connection.query('SELECT * FROM sales ORDER BY status, sale_date').then((orders) => orders[0]);

const detailOrder = (saleId) => connection.query('SELECT sale_id, sale_date, product_id, quantity, name, price, url_image FROM Trybeer.sales_products INNER JOIN products ON sales_products.product_id = id INNER JOIN sales ON sales_products.sale_id = sales.id WHERE sale_id = ?;', [saleId])
  .then((detail) => detail[0]);

module.exports = {
  insertSale,
  insertProductSale,
  updateStatus,
  orderById,
  allSales,
  detailOrder,
};
