// Importando o módulo mysql2/promise
const mysql = require('mysql2/promise');

// Configuração da pool de conexões com MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = pool;