const mysql = require('mysql2/promise');

// require('dotenv').config({ path: `${__dirname}/../../.env` });
require('dotenv').config();

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
};

const connection = mysql.createPool(config);

module.exports = connection;
// const mysqlx = require('@mysql/xdevapi');
// require('dotenv').config();

// let schema = null;
// function connection() {
//   if (schema) return Promise.resolve(schema);
//   return mysqlx
//     .getSession({
//       user: process.env.MYSQL_USER,
//       password: process.env.MYSQL_PASSWORD,
//       host: process.env.HOSTNAME,
//       port: 33060,
//       schema: 'Trybeer',
//     })
//     .then((dbSchema) => {
//       schema = dbSchema;
//       return schema;
//     })
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     });
// }
// module.exports = connection;
