const db = require('./connection');

const validateLog = async (email, password) => {
  const user = await db.execute(
    'SELECT role FROM Trybeer.users WHERE email = ? and password = ? ',
    [email, password],
  );
  console.log(user);
  return user[0][0];
};
const checkUser = async (email) => {
  const user = await db.execute(
    'SELECT email FROM Trybeer.users WHERE email = ? ', [email],
  );
  return user[0][0].email;
};

// const registerUser = async (name, email, password, role) => {
//   try {
//     db()
//     .then((connect) => connect
//     .getTable('users')
//     .insert(['name', 'email', 'password', 'role'])
//     .values(name, email, password, role)
//     .execute());
//     return { name, email, role };
//   } catch (err) {
//     console.log(err.message)
//   }
// };

module.exports = {
  validateLog,
  checkUser,
};
