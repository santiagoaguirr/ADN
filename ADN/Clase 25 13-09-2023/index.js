const express = require ('express');
const app = express();

    
    app.get('/metGet', ( req, res ) => {
        res.json({object: 'Objeto de respuesta', codigo:200});
    })
    
    app.post('/metPost', ( req, res ) => {
        res.send('Respuesta metodo POST');
    })

    app.delete('/metDelete', ( req, res ) => {
        res.send('Respuesta metodo DELETE');
    })

app.listen(3006, () => console.log('Servidor funcionando en el puerto 3006'));