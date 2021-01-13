const connection = require('./connection');

const update = async (name, email) => {
  const [newName] = await connection.execute('UPDATE users SET name = ? WHERE email = ?', [name, email]);
  return newName;
};

module.exports = {
  update,
};
