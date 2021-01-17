const database = require('./connection');

const getAllSales = async () => {
  const [sales] = await database.execute('SELECT * FROM sales');
  return sales;
};

const getSale = async (id) => {
  const sql = 'SELECT sp.sale_id, sa.total_price, pr.name, sp.quantity, pr.price, pr.price * sp.quantity AS total, sa.status FROM sales_products AS sp JOIN sales AS sa ON sp.sale_id = sa.id JOIN products AS pr ON sp.product_id = pr.id WHERE sale_id = ?';
  const [sale] = await database.execute(sql, [id]);

  return sale;
};

const update = async (id, status) => {
  const sql = 'UPDATE sales SET status=? WHERE id=?';
  await database.query(sql, [status, id]);
};

module.exports = {
  getAllSales,
  getSale,
  update,
};
