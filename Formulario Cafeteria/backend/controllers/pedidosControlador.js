const pedidoModel = require('../Models/pedidoModel');

const PRODUCTOS = ['Café', 'Americano', 'Capuchino', 'Latte', 'Moka', 'Chocolate', 'Té'];
const TAMANIOS = ['Chico', 'Mediano', 'Grande'];

async function registrarPedido(req, res) {
    const cliente = typeof req.body.nombre === 'string' ? req.body.nombre.trim() : '';
    const correo = typeof req.body.correoElec === 'string' ? req.body.correoElec.trim() : '';
    const producto = typeof req.body.productos === 'string' ? req.body.productos : '';
    const cantidad = Number(req.body.cantidad);
    const tamanio = typeof req.body.tamanio === 'string' ? req.body.tamanio : '';
    const llevar = req.body.llevar === 'Si' ? 'Si' : 'No';
    const observaciones = typeof req.body.observacion === 'string' ? req.body.observacion.trim() : '';

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!cliente || cliente.length > 100 || !correoValido || correo.length > 150 ||
        !PRODUCTOS.includes(producto) || !Number.isInteger(cantidad) || cantidad < 1 || cantidad > 99 ||
        !TAMANIOS.includes(tamanio) || observaciones.length > 1000) {
        return res.status(400).send('Los datos del pedido no son válidos. Regresa al formulario y revisa la información.');
    }

    const fecha_registro = new Date().toISOString().slice(0, 19).replace('T', ' ');
    try {
        const id = await pedidoModel.registrarPedido(
            cliente, correo, producto, cantidad, tamanio, llevar, observaciones, fecha_registro
        );
        const parametros = new URLSearchParams({
            id: String(id), cliente, correo, producto, cantidad: String(cantidad),
            tamanio, llevar, observaciones
        });
        return res.redirect('/resumen.html?' + parametros.toString());
    } catch (error) {
        console.error('Error al registrar pedido:', error.message);
        return res.status(500).send('No se pudo guardar el pedido. Verifica la conexión con la base de datos e inténtalo de nuevo.');
    }
}

module.exports = { registrarPedido };
