const express = require('express'); // Almaceno los paquetes de express en una constante llamada express
const app = express(); // creo una constante llamada app donde va a estar almacenado mi servidor


    app.get('/server', ( req, res ) => {
        res.send('Respuesta de server');
    })
    app.post('/', ( req, res ) => {
        res.send('Respuesta POST');
    })
    app.get('/', ( req, res) => {
        res.send('Respuesta del server en direccion /');
    })


app.listen(410, () => console.log('Server in port 410'));

