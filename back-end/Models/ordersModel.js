const connection = require('./connection');

const getOrders = async () => {
  const [orders] = await connection.execute(
    'SELECT quantity, name, total_price FROM sales_products INNER JOIN products ON sales_products.product_id = products.id INNER JOIN sales ON sales_products.sale_id = sales.id',
  );
  return orders;
};

module.exports = {
  getOrders,
};
