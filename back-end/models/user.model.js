const connection = require('./connection.model');

const TABLE = 'users';

const findUserbyEmailAndPassword = async ({ email, password }) => (
  await connection(
    `SELECT id, name, email, role FROM ${TABLE}
    WHERE email = ? AND password = ?`,
    [email, password],
  )
);

const createUser = async (userData) => {
  const { email, name, password, role } = userData;
  return await connection(
    `INSERT INTO ${TABLE} SET ?`,
    { email, name, password, role },
  );
};

const findUserById = async (id) => await connection(
  `SELECT id, name, email, role FROM ${TABLE} WHERE id = ?`,
  [id],
);

const updateUser = async (id, name, email, password, role) => (
  await connection(
    `UPDATE ${TABLE} SET ? WHERE id = ?`,
    [{ id, name, email, password, role }, id],
  )
);

const excludeUser = async (id) => (
  await connection(
    `DELETE FROM ${TABLE} WHERE id = ?`,
    [id],
  )
);

module.exports = {
  createUser,
  findUserById,
  findUserbyEmailAndPassword,
  excludeUser,
  updateUser,
};
