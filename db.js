const mysql = require('mysql2/promise')
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
(async () => {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log(' Connected to MySQL database');
  } catch (err) {
    console.error(' Database connection failed:', err.message);
  }
})();


module.exports = db;