const connection = require('./connection.model');

const findUserbyEmailAndPassword = async ({ email, password }) => {
  const db = await connection();
  const results = await db
    .getTable('users')
    .select(['id', 'name', 'email', 'role'])
    .where('email = :email AND password = :password')
    .bind('email', email)
    .bind('password', password)
    .execute();

  const user = results.fetchOne();
  return user;
};

const createUser = async (userData) => {
  const { email, name, password, role } = userData;
  const db = await connection();
  await db
    .getTable('users')
    .insert(['email', 'name', 'password', 'role'])
    .values(email, name, password, role)
    .execute();
};

const findUserById = async (id) => {
  const db = await connection();
  const results = await db
    .getTable('users')
    .select(['id', 'name', 'email', 'role'])
    .where('id = :id')
    .bind('id', id)
    .execute();

  const user = results.fetchOne();
  return user;
};

const updateUser = async (id, name, email, password, role) => {
  const db = await connection();
  await db
    .getTable('users')
    .update()
    .set('name', name)
    .set('email', email)
    .set('password', password)
    .set('role', role)
    .where('id = :id')
    .bind('id', id)
    .execute();
};

const excludeUser = async (id) => {
  const db = await connection();
  await db
    .getTable('users')
    .delete()
    .where('id = :id')
    .bind('id', id)
    .execute();
};

module.exports = {
  createUser,
  findUserById,
  findUserbyEmailAndPassword,
  excludeUser,
  updateUser,
};
