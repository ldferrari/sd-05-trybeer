const mysql = require('mysql2/promise');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../../.env') });

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
  database: 'Trybeer',
};

const connection = mysql.createPool(config);
// QUERY TESTA A CONEXAO
/* connection.query(
  'SELECT * FROM products',
  function(err, results, fields) {
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
  }
  ); */

// console.log(connection);
module.exports = connection;
