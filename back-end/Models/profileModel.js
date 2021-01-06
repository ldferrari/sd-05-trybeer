const connection = require('./connection');

const create = async (name) => {
  const [newName] = await connection.execute('UPDATE users SET name = ?', [name]);
  return newName;
};

module.exports = {
  create,
};
