const mysql = require('mysql2/promise');
require('dotenv').config({ path: __dirname + '/../../.env' });

const config = {
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	host: process.env.HOSTNAME,
	port: 33060,
	socketPath: '/var/run/mysqld/mysqld.sock',
	database: 'Trybeer',
};

const connection = mysql.createPool(config);

// connection.query(
//   `SELECT * FROM users WHERE email = 'tryber@trybe.com.br'`,
//   function(err, results, fields) {
//   console.log(results); // results contains rows returned by server
//   // console.log(fields); // fields contains extra meta data about results, if available
//   }
//   );

module.exports = connection;
