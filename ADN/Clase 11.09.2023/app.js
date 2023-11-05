const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});

app.listen(port, () => {
    console.log('Servidor Express en ejecución en el puerto ${port}');
});

