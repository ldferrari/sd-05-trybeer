const getCollection = require('./connection');

const getAllUsers = async () => await getCollection.execute('SELECT * FROM Trybeer.users;');

const getById = async (id) => await getCollection.execute(`SELECT user_id FROM Trybeer.users WHERE user_id = ${id};`);

const createUser = async (firstName, lastName, email, password) =>
  getCollection.execute(
    'INSERT INTO Trybeer.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password]
  );

module.exports = {
  getAllUsers,
  getById,
  createUser,
};
