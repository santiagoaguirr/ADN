const mysql = require("mysql2/promise");
const express = require("express");
const app = express();
const port = 3310;

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"bancoargentina",
    port: 3307,
});

app.get('/usuarios', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});