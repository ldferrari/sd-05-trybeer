const database = require('./connection');

const getOrderDetails = async (id) => {
  const [
    orderDetail,
  ] = await database.execute(
    'SELECT sp.sale_id, DATE_FORMAT(sa.sale_date, "%d/%m") AS sale_date, pr.name, sp.quantity, pr.price * sp.quantity AS total, sa.status FROM sales_products AS sp JOIN sales AS sa ON sp.sale_id = sa.id JOIN products AS pr ON sp.product_id = pr.id WHERE sale_id = ?',
    [id],
  );
  return { orderDetail };
};

module.exports = { getOrderDetails };
