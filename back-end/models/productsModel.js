const connection = require('./connection');

const getAllProducts = async () => connection.execute('SELECT * FROM products;');

const getById = async (id) => connection.execute('SELECT * FROM products WHERE id = ?;', [id]);

module.exports = {
  getAllProducts,
  getById,
};
