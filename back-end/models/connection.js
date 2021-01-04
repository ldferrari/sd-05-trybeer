// 'Path' is a Node.js module
const path = require('path');
const mysql = require('mysql2');

// https://nodejs.org/api/path.html#path_path_resolve_paths
const enviromentVariable = path.resolve(__dirname, '..', '..', '.env');
require('dotenv').config({ path: enviromentVariable });

const config = mysql.createConnection({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
});

config.connect((err) => {
  return err
    ? console.error(`${err} ${err.message}`)
    : console.log(`Connected to the MySQL server.`);
});
