const conectar = require('../config/database');

async function registrarPedido(cliente, correo, producto, cantidad, tamanio, llevar, observaciones, fecha_registro) {
    const sql = `INSERT INTO pedidos
        (cliente, correo, producto, cantidad, tamanio, llevar, observaciones, fecha_registro)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const db = await conectar();
    try {
        const [resultado] = await db.execute(sql, [
            cliente, correo, producto, cantidad, tamanio, llevar, observaciones, fecha_registro
        ]);
        return resultado.insertId;
    } finally {
        await db.end();
    }
}

module.exports = { registrarPedido };
