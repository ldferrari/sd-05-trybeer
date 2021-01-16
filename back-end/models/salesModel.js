const database = require('./connection');

const getAllSales = async () => {
  const [sales] = await database.execute('SELECT * FROM sales');
  return sales;
};

const getSale = async (id) => {
  const sql = 'SELECT * from sales WHERE id = ?';
  const [sale] = await database.execute(sql, [id]);

  return sale;
}

module.exports = {
  getAllSales,
  getSale,
};
