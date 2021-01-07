const mysql = require('mysql2');
require('dotenv').config({ path: __dirname + '/../../.env' });

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  database: 'Trybeer',
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};

const connection = mysql.createPool(config);
// const connection = mysql.createConnection(config);

connection.query('SELECT * FROM products', function (err, products, campos) {
  console.log(products);
});

module.exports = { connection };
