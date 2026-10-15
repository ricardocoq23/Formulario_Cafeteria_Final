// Conexión a MySQL mediante las variables definidas en el archivo .env
const mysql = require('mysql2/promise');
require('dotenv').config();

async function conexion() {
    return mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT) || 3306
    });
}

module.exports = conexion;
