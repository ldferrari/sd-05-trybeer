const connection = require('./connection');

const createUser = async (name, email, password, role) => {
  connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)',
    [name, email, password, role],
  );
  return { message: 'created' };
};

// const getAllUsers = async () => {
//   const [users] = await connection.execute('SELECT * FROM Trybeer.users;');

//   return users.map(({ id, first_name, last_name, email, password }) => ({
//     id,
//     firstName: first_name,
//     lastName: last_name,
//     email,
//     password,
//   }));
// };

const logIn = async (email) => {
  const [user] = await connection.query(
    'SELECT * FROM users WHERE email = ? ',
    [email],
  );

  if (!user) return null;
  return user;
};

const updateUserName = async (name, email) => {
  const [
    newName,
  ] = await connection.execute('UPDATE users SET name = ? WHERE email = ?', [
    name,
    email,
  ]);
  console.log(newName);
  return newName;
};

// const deleteUser = async (id) =>
//   await connection.execute('DELETE FROM Trybeer.users WHERE id = ?', [id]);

module.exports = {
  createUser,
  logIn,
  updateUserName,
  // deleteUser,
};
