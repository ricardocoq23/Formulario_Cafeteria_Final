const express = require('express');
const path = require('path');
require('dotenv').config();

const pedidosRoutes = require('./routes/pedidoRoutes');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/', pedidosRoutes);

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});