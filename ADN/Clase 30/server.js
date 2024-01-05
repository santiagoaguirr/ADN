const mysql = require('mysql2/promise');
const express = require ('express');
const app = express();


    app.get('/server', ( req , res ) => {
        res.send('Respuesta del servidor');
    })

app.listen(4100, () => console.log('Server in port 4100'));