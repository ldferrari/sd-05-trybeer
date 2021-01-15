const connection = require('./connection');

const getDetails = async (saleId) => {
  const [detail] = await connection.execute(
    'SELECT SP.quantity, P.name, S.total_price, P.price, S.sale_date, S.status FROM sales_products AS SP INNER JOIN products AS P ON SP.product_id = P.id INNER JOIN sales AS S ON SP.sale_id = S.id WHERE S.id = ?', [saleId],
  );
  // console.log(detail)
  return detail;
};

module.exports = {
  getDetails,
};
