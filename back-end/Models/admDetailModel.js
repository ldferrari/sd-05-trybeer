const connection = require('./connection');

const getDetails = async (saleId) => {
  const [detail] = await connection.execute(
    'SELECT quantity, name, total_price FROM sales_products INNER JOIN products ON sales_products.product_id = products.id INNER JOIN sales ON sales_products.sale_id = sales.id WHERE sales.id = ?', [saleId],
  );
  // console.log(detail)
  return detail;
};

module.exports = {
  getDetails,
};
