const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19july2000',
    database: 'shopleft_database'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connection to SHOPLEFT database😊');
});

module.exports = connection;