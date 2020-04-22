const mysql = require('mysql');

let connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'orders'
});

connection.connect((err) => {
  if(err) {
    console.log('Error connecting to the mysql database...', err)
  } else {
    console.log('\nMysql database is connected...\n')
  }
});

module.exports = connection;