const getCollection = require('./connection');

const getAllProducts = async () => await connection.execute('SELECT * FROM Trybeer.products;');

module.exports = {
  getAllProducts,
};
