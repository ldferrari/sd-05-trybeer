const connection = require('./connection.model');

const findUserbyEmailAndPassword = ({ email, password }) =>
  connection
    .query(
      'SELECT (id, name, email, role) FROM users WHERE email = ? AND password = ?',
      [email, password],
    )
    .then((array) => array[0]);

const createUser = ({ email, name, password, role }) =>
  connection.query(
    'INSERT INTO users (email, name, password, role) VALUES (?,?,?,?)',
    [email, name, password, role],
  );

const findUserById = (id) =>
  connection.query('SELECT (id, name, email, role) FROM users WHERE ID = ? ', [
    id,
  ]);

const updateUser = (id, name, email, password, role) =>
  connection.query(
    'UPDATE users SET name = ?, email = ?, password = ?, role = ? WHERE id = ?',
    [name, email, password, role, id],
  );

const excludeUser = async (id) => connection.query('DELETE FROM users WHERE id = ?', [id]);

module.exports = {
  createUser,
  findUserById,
  findUserbyEmailAndPassword,
  excludeUser,
  updateUser,
};
