const express = require('express');
const connectToDatabase = require('./conexion');
const publicacionesRoutes = require('./routes/publicaciones');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectToDatabase();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/publicaciones', publicacionesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
