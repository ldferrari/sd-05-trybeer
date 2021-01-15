const database = require('./connection');

const getAllSales = async () => {
  const [sales] = await database.execute('SELECT * FROM sales');
  return sales;
};

const getSale = async (id) => {
  const sql = 'SELECT * from sales WHERE id = ?'
  await database.execute(sql, [id])
}

module.exports = {
  getAllSales,
  getSale,
};
