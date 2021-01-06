const connection = require('./connection');

const getByEmail = async (email) => {
  const user = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  return user;
};

const createUser = async (name, email, password, role) => connection.execute(
  ' INSERT INTO Trybeer.users (name, email, password, role) VALUES (?, ?, ?, ?) ',
  [name, email, password, role],
);

module.exports = { getByEmail, createUser };
