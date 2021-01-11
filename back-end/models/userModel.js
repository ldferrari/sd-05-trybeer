const connection = require('./connection');

const getAllUsers = async () => connection.execute('SELECT * FROM users');

const getByEmail = async (email) => {
  const user = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  return user[0][0];
};

const createUser = async (name, email, password, role) => connection.execute(
  'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
  [name, email, password, role],
);

const updateUser = async (nameEdit, email) => connection.execute(
  'UPDATE users SET name = ? WHERE email = ?',
  [nameEdit, email],
);

module.exports = { getAllUsers, getByEmail, createUser, updateUser };
