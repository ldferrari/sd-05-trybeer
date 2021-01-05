const connection = require('./connection');

const createUser = async (name, email, password) =>
  connection.execute(
    'INSERT INTO Trybeer.users (name, email, password) VALUES (?,?,?)',
    [name, email, password]
  );

const getAllUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM Trybeer.users;');

  return users.map(({ id, first_name, last_name, email, password }) => ({
    id,
    firstName: first_name,
    lastName: last_name,
    email,
    password,
  }));
};

const getUserById = async (id) => {
  const [
    user,
  ] = await connection.execute('SELECT * FROM Trybeer.users WHERE id = ?', [
    id,
  ]);

  if (!user) return null;

  return {
    id: user[0].id,
    firstName: user[0].first_name,
    lastName: user[0].last_name,
    email: user[0].email,
    password: user[0].password,
  };
};

const updateUser = (id, firstName, lastName, email, password) =>
  connection.execute(
    'UPDATE Trybeer.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id]
  );

const deleteUser = async (id) =>
  connection.execute('DELETE FROM Trybeer.users WHERE id = ?', [id]);

module.exports = {
  isValid,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
