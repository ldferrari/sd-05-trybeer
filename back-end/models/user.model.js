const connection = require('./connection.model');

// prettier-ignore
const findUserbyEmailAndPassword = ({ email, password }) => connection
  .query(
    'SELECT id, name, email, role FROM users WHERE email = ? AND password = ?',
    [email, password],
  )
  .then((array) => array[0][0]);
// prettier-ignore

const createUser = ({ email, name, password, role }) => connection
  .query(
    'INSERT INTO users (email, name, password, role) VALUES (?,?,?,?)',
    [email, name, password, role],
  );

// prettier-ignore
const findUserById = (id) => connection
  .query('SELECT id, name, email, role FROM users WHERE id = ? ', [id])
  .then((array) => array[0][0]);

// prettier-ignore
const updateUser = (id, { name }) => (
  connection.query(
    'UPDATE users SET name = ? WHERE id = ?',
    [name, id],
  )
);

// prettier-ignore
const excludeUser = async (id) => connection.query('DELETE FROM users WHERE id = ?', [id]);

module.exports = {
  createUser,
  findUserById,
  findUserbyEmailAndPassword,
  excludeUser,
  updateUser,
};
