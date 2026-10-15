const express = require('express');
const router = express.Router();

const pedidosController = require('../controllers/pedidosControlador');
router.post('/pedido', pedidosController.registrarPedido);

module.exports=router;