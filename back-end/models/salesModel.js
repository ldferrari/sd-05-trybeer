const database = require('./connection');

const getAllSales = async () => {
  const [sales] = await database.execute('SELECT * FROM sales');
  return sales;
};

module.exports = {
  getAllSales,
};
