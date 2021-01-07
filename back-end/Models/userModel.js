const connection = require('./connection');

const getByEmail = async (email) => {
  const [buscaEmail] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
  return buscaEmail[0];
};

const create = async (name, email, password, role) => {
  const [createUser] = await connection.execute('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
  // console.log(createUser);
  return createUser;
};

module.exports = {
  getByEmail,
  create,
};
