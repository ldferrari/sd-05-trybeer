const database = require('./connection');

const update = async (id, name) => {
  const sql = 'UPDATE users SET name=? WHERE id=?';
  await database.query(sql, [name, id]);
};

const getById = async (id) => {
  const sql = 'SELECT id FROM users WHERE id=?';
  const [e] = await database.query(sql, [id]);

  return e;
};

module.exports = {
  update,
  getById,
};
