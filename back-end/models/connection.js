const path = require('path');
const mysql = require('mysql2');

const environmentVariable = path.resolve(__dirname, '..', '..', '.env');

require('dotenv').config({ path: environmentVariable });

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
};
