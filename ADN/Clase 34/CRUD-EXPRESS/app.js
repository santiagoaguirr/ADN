const express = require('express');
const mysql2 = require('mysql2/promise');
const app = express();

const db = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'clientes',
    port: 3307
});

const port = 4300;

app.use(express.json());

app.get('/', async (req, res) => {
    res.send('This is OK');  
});

app.post('/create', async (req, res) => {
    try {
        const { nombre, apellido, telefono, producto, tipo } = req.body;
        const [rows] = await db.query('INSERT INTO clientes (id, nombre, apellido, telefono, producto, tipo) VALUES (NULL, ?,?,?,?,?)', [nombre, apellido, telefono, producto, tipo]);
            res.send(rows);
    } catch (error) {
        res.status(500).json('Problemas en la consulta' + error.message);
    }
});

app.get('/read', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM clientes');
            res.send(rows);
    } catch (error) {
        res.status(500).json('Problemas en la consulta' + error.message);
    }
});

app.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido, telefono, producto, tipo} = req.body;
        const [rows] = await db.query('UPDATE clientes SET nombre = ?, apellido = ?, telefono = ?, producto = ?, tipo = ? WHERE id = ?', [nombre, apellido, telefono, producto, tipo, id]);

        res.json(rows);
    } catch (error) {
        res.status(500).json('Problemas en la consulta: ' + error.message);
    }
});

app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [ rows ] = await db.query('DELETE from clientes WHERE id = ?', [id]);
            res.json(rows);
    } catch (error) {
        res.json(error);
    }
});

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto: ' + port);
});
