var mysql = require('mysql');

var connection = mysql.createConnection(
{
host:'localhost',
user: 'root',
password: 'SheeP',
  database: 'articles',
}

);

connection.connect();
