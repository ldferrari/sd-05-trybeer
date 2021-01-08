const connection = require('./connection');

const getAllUsers = async () => {
  return connection.execute('SELECT * FROM users');
};

const getByEmail = async (email) => {
  const user = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  return user[0][0];
};

const createUser = async (name, email, password, role) =>
  connection.execute(
    ' INSERT INTO Trybeer.users (name, email, password, role) VALUES (?, ?, ?, ?) ',
    [name, email, password, role],
  );

module.exports = { getAllUsers, getByEmail, createUser };
